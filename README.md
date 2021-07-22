Readme later aanpassen.
# TradingBot
 Installation steps: 
 Npm install dotenv  (manage api keys)
 Npm install express (Fast, unopinionated, minimalist web framework for node)
 Npm install ccxt (CryptoCurrency eXchange Trading Library)
 npm install axios (Promise based HTTP client for the browser and node.js)


 npm install coingecko-api
 npm install coinbase-pro
 npm i commander --save  
 
 Debug mode 
 Npm install nodemon
 npm install jest

REST API ENDPOINT URL
https://api.pro.coinbase.com

Sandbox URLs
When testing your API connectivity, make sure to use the following URLs.
Website
https://public.sandbox.pro.coinbase.com
REST API
https://api-public.sandbox.pro.coinbase.com
Websocket Feed
wss://ws-feed-public.sandbox.pro.coinbase.com
FIX API
tcp+ssl://fix-public.sandbox.pro.coinbase.com:4198

A - Added (This is a new file that has been added to the repository)
M - Modified (An existing file has been changed)
D - Deleted (a file has been deleted)
U - Untracked (The file is new or has been changed but has not been added to the repository yet)
C - Conflict (There is a conflict in the file)
R - Renamed (The file has been renamed)
S - Submodule (In repository exists another subrepository)

PowerShell 
Get unix time cmd "(Get-Date "22/07/2021 00:00:00" -uformat %s)"dock

# Docker 
Building
docker build -t "name" .

Running 
docker run --name "name" "name"

Stopping 
docker stop "name"