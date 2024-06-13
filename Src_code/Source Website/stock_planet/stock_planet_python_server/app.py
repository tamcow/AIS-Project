from flask import Flask
from utils.predictFor30DaysNext import predict_for_30_days_next
from utils.getInfoBank import getInfoBank

app = Flask(__name__, static_folder='static', static_url_path='/static')

@app.route('/predict/<bank_code>')
def predict(bank_code):
    print(bank_code)
    return predict_for_30_days_next(bank_code)

@app.route('/info/<bank_code>')
def getDetailBank(bank_code):
    return getInfoBank(bank_code)


if __name__ == '__main__':
    app.run(debug=True)
