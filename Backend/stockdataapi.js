require('dotenv').config();

const { Client } = require('@apperate/iexjs');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

async function getStockPrice(symbol) {
  const client = new Client({ api_token: process.env.API_KEY, version: 'v1' });

  const stockPrice = await client.apperate.queryData({ workspace: "CORE", id: "QUOTE", key: symbol });

  return stockPrice;
}

(async () => {
  // Get user input for stock symbol
  readline.question("Enter a stock symbol: ", async (symbol) => {
    console.log(`You entered: ${symbol}`);  // Print the input

    const priceData = await getStockPrice(symbol);

    console.log("getStockPrice:", priceData);  // Print entire price data object
    console.log("Stock Price:", priceData[0].latestPrice); // Print latest price

    readline.close();  // Close the readline interface
  });
})();
