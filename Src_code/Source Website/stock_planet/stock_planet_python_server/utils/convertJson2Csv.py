import requests
import pandas as pd

def convertJson2CSV(bank_code):
    params = {'access_key': 'fc839effce60b98593087a84ca54c6d5', 'symbols':bank_code+'.XSTC','date_from':'2019-12-31','date_to':'2023-12-31','limit':'1000'}

    api_result = requests.get('http://api.marketstack.com/v1/eod', params)

    # api_response = api_result.json()
    # Assuming 'response' is a Python variable containing the JSON data
    response = api_result.json()
    print("response {}".format(response))

    # Extracting the data under the 'data' key
    financial_data = response['data'] if 'data' in response and isinstance(response['data'], list) else []

    # Creating a DataFrame from the extracted data
    financial_df = pd.DataFrame(financial_data)

    # Selecting and renaming the relevant columns
    converted_df = financial_df[['date', 'close', 'open', 'high', 'low', 'volume']].rename(columns={
        'date': 'Date',
        'close': 'Price',
        'open': 'Open',
        'high': 'High',
        'low': 'Low',
        'volume': 'Vol.'
    })

    # Calculating the 'Change %'
    converted_df['Change %'] = converted_df['Price'].pct_change() * 100

    # Reordering the columns to match VCB.csv structure
    converted_df = converted_df[['Date', 'Price', 'Open', 'High', 'Low', 'Vol.', 'Change %']]

    # Convert the 'Date' to a more familiar format (YYYY-MM-DD) and sort by date
    converted_df['Date'] = pd.to_datetime(converted_df['Date']).dt.strftime('%Y-%m-%d')
    converted_df = converted_df.sort_values(by='Date', ascending=True)

    # Optionally, save the converted DataFrame to a CSV file
    converted_csv_path = 'data/csv/'+bank_code+'.csv'  # Replace with the desired output path
    converted_df.to_csv(converted_csv_path, index=False)