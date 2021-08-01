# TradingBot
To get this Tradingbot running you need to fo the following: 
 
> Install NodeJS v9.11.2
> 
> Install git
> 
> Download Tradingbot 
> 
> install dependecies 

# Installing Nodejs 
I used Nodejs  v9.11.2 when building and testing this. 

You could install the latest version of Nodejs but I'm not sure it will work. 

# Installing git 
As part of the installation, process git is used. 

# Downloading Tradingbot
The recommended way of downloading this is by using git. 

Run this in a terminal: git clone git://github.com/Belfor-IT/TradingBot

cd Tradingbot

This will download the latest

npm install --only=production

# Starting Tradingbot 
After all the above you can start tradingbot by running the following in your terminal:
node index.js 

This will start de paper trade 

The other options you have: 
>'-i, --interval [interval]', 'Interval in seconds for candlestick',
>
>'-p, --product [product]', 'Product identifier', 'BTC-EUR'
>
>'-s, --start [start]', 'Start time in unix seconds',
>
>'-e, --end [end]', 'End time in unix seconds',
>
>'-t, --strategy [strategy]', 'Strategy Type'
>
>'-r, --type [type]', 'Run type'
>
>'-f, --funds [funds]', 'Amount of money to use',
>
>'-l, --live', 'Run live'

# Settings 
 Config.json is for your API keys
 
 Create your strategy add it to the strategy folder. 
# PowerShell 
Get unix time in powershell:

Get-Date "22/07/2021 00:00:00" -uformat %s

# Docker 
Building
docker build -t "tradingbot" .

Running 
docker run --name "tradingbot" "tradingbot" 

Stopping 
docker stop "tradingbot"

Running with your API keys
docker run --name "tradingbot" -e "Coinbase_API_KEY=APIKEY" -e "Coinbase_API_SECRET=SERCET==/"  -e "Coinbase_API_PASSPHRASE=Password==/>."  "username/tradingbot"
