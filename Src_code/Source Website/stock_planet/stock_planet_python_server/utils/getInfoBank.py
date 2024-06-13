import yfinance as yf

def getInfoBank(bank_code):
    input = bank_code.upper()+".VN"
    print("input {}".format(input))
    msft = yf.Ticker(input)
    print("msft {}".format(msft.info))
    return msft.info