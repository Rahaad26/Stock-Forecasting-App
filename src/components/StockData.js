// src/components/StockData.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';

const StockData = ({ symbol }) => {
  const [stockData, setStockData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://finance.yahoo.com/quote/${symbol}`);
        const $ = cheerio.load(response.data);
        const price = $('.Trsdu(0.3s) .My(6px) span').first().text();
        const name = $('h1').first().text();
        setStockData({ price, name });
      } catch (error) {
        console.error('Error fetching stock data:', error);
      }
    };

    fetchData();
  }, [symbol]);

  return (
    <div>
      {stockData ? (
        <div>
          <h2>{stockData.name}</h2>
          <p>Price: {stockData.price}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default StockData;
