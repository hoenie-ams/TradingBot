/*
The Coinbase API is rate limited to prevent abuse that would 
degrade our ability to maintain consistent API performance for all users. 
By default, each API key or app is rate limited at 10,000 requests per 
hour. If your requests are being rate limited, 
HTTP response code 429 will be returned with an rate_limit_exceeded 
error 
*/

const CoinbasePro = require('coinbase-pro');
const config = require('./configuration');

const key = config.get('Coinbase_API_KEY');
const secret = config.get('Coinbase_API_KEY');
const passphrase = config.get('Coinbase_API_KEY');
const apiURI = config.get('Coinbase_API_KEY');
const sandboxURI = config.get('Coinbase_API_KEY');

const client = new CoinbasePro.PublicClient();
const authedClient = new CoinbasePro.AuthenticatedClient(key, secret, passphrase, apiURI);

const callback = (error, response, data) => {
    if (error)
       return console.dir(error);
   
    return console.dir(data);
  };


const productId = 'BTC-EUR'

async function historicalRates(){
    client.getProductHistoricRates(productId, {
        granularity: 300  //The granularity field must be one of the following values: {60, 300, 900, 3600, 21600, 86400} These values correspond to timeslices representing one minute, five minutes, fifteen minutes, one hour, six hours, and one day, respectively.
    },
        callback
    //Time: 1620411900 (date 1620411900 )
   // Low: 47564.85
   // High: 47666.44
   // Open: 47610.7
   // Close: 47585.18
   // Volume: 7.91347058 


);};

//historicalRates()
console.log(key);
console.log('We are live');
