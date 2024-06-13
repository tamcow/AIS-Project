import pandas as pd
import numpy as np
from tensorflow.keras.models import load_model
from sklearn.preprocessing import MinMaxScaler
import matplotlib.pyplot as plt
import os
from utils.createDataset import create_dataset
from utils.convertJson2Csv import convertJson2CSV




def predict_for_30_days_next(bank_code):
    convertJson2CSV(bank_code)
    bank_data = pd.read_csv("data/csv/"+bank_code+".csv")
    bank_data = bank_data.dropna()
    bank_data1 = bank_data.reset_index()['Price']
    bank_data['Index'] = np.arange(len(bank_data.index))
    scaler=MinMaxScaler(feature_range=(0,1))
    bank_data1=scaler.fit_transform(np.array(bank_data1).reshape(-1,1))
    train_size = int(0.7 * len(bank_data1))
    test_size = int(0.2 * len(bank_data1))
    val_size = len(bank_data1) - train_size - test_size

    train_data = bank_data1[:train_size]
    test_data = bank_data1[train_size:train_size+test_size]
    val_data = bank_data1[train_size+test_size:]

    model = load_model('models/'+bank_code+'_model.h5')
    time_step = 20
    X_train, y_train = create_dataset(train_data,time_step)
    X_val, yval = create_dataset(val_data,time_step)
    X_test, ytest = create_dataset(test_data, time_step)
    X_train =X_train.reshape(X_train.shape[0],X_train.shape[1] , 1)
    X_test = X_test.reshape(X_test.shape[0],X_test.shape[1] , 1)
    X_val = X_val.reshape(X_val.shape[0],X_val.shape[1] , 1)
    train_predict=model.predict(X_train)
    y_pred=model.predict(X_test)
    y_pred_val=model.predict(X_val)
    train_predict=scaler.inverse_transform(train_predict)
    y_pred=scaler.inverse_transform(y_pred)
    y_pred_val=scaler.inverse_transform(y_pred_val)
    ytest = scaler.inverse_transform(ytest.reshape(-1,1))   
    yval = scaler.inverse_transform(yval.reshape(-1,1))
    start_point={"acb":3, "mbb":4, "shb":3, "stb":4, "vcb":4}
    x_input=val_data[start_point[bank_code]:].reshape(1,-1)
    x_input.shape
    temp_input=list(x_input)
    temp_input=temp_input[0].tolist()
    lst_output=[]
    n_steps=time_step
    i=0
    while(i<30):
        if(len(temp_input)>20):
            x_input=np.array(temp_input[1:])
            x_input=x_input.reshape(1,-1)
            x_input = x_input.reshape((1, n_steps, 1))
            yhat = model.predict(x_input, verbose=0)
            temp_input.extend(yhat[0].tolist())
            temp_input=temp_input[1:]
            lst_output.extend(yhat.tolist())
            i=i+1
        else:
            x_input = x_input.reshape((1,n_steps,1))
            yhat = model.predict(x_input, verbose=0)
            temp_input.extend(yhat[0].tolist())
            lst_output.extend(yhat.tolist())
            i=i+1
    train_data = scaler.inverse_transform(train_data)
    test_data = scaler.inverse_transform(test_data)
    val_data = scaler.inverse_transform(val_data)
    lst_output = scaler.inverse_transform(lst_output)
    y_pred=scaler.inverse_transform(y_pred)
    y_pred_val=scaler.inverse_transform(y_pred_val)
    train_data_index = pd.RangeIndex(start=0, stop=train_size, step=1)
    plt.plot(scaler.inverse_transform(train_data))
    test_data_index = pd.RangeIndex(start=train_size, stop=train_size+test_size, step=1)
    plt.plot(test_data_index,scaler.inverse_transform(test_data))
    test_data_index = pd.RangeIndex(start=train_size+21, stop=train_size+test_size, step=1)
    plt.plot(test_data_index,(y_pred))
    val_data_index = pd.RangeIndex(start=train_size+test_size, stop=train_size+test_size+val_size, step=1)
    plt.plot(val_data_index,scaler.inverse_transform(val_data))
    val_data_index = pd.RangeIndex(start=train_size+test_size+21, stop=train_size+test_size+val_size, step=1)
    plt.plot(val_data_index,y_pred_val)
    prediect_data_index = pd.RangeIndex(start=len(bank_data1)-1, stop=len(bank_data1)+29, step=1)
    plt.plot(prediect_data_index,scaler.inverse_transform(lst_output))
    plt.legend(['Train','Test','Test Predictions ','Validate','Validate Predictions','Next30days Predictions'])
    plt.title("Dự đoán giá cổ phiếu ACB trong 30 ngày kế tiếp theo tỉ lệ 7-2-1")
    file_path = os.path.join("static",bank_code, 'bieudo_'+bank_code+'.png')
    plt.savefig(file_path)
    plt.close('all')
    return file_path