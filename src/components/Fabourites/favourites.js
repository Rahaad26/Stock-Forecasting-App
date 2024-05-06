import React, { useState } from "react";
import logo from "../img/test.png";
import "./favourites.css";
import axios from "axios";
const Stocks = [
    {
      name: "Focaccia",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
    },
    {
      name: "Pizza Margherita",
      price: 10,
      photoName: "pizzas/margherita.jpg",
    },
  ];


function Favourites() {
  const getFavorites = async (userid) => {
    try {
      const response = await axios.get(`http://localhost:8081/getfavorites/${userid}`);
      return response.data;
    } catch (error) {
      console.error("Error in retrieving favorites:", error);
      return [];
    }
  };

  // Example usage:
  const userid = 1; // replace with actual user ID
  getFavorites(userid).then((favorites) => {
    console.log("Favorites:", favorites.stock_name);
  });



    return(
<div className="topNav">
  
    <div className="profile">
      <h2>Favourites</h2>
      <p>HI</p>
    </div>

    <FevBox />
  </div>
    );
  
}

function FevBox() {
  return (
    <div className="fevstocks">
      {Stocks.map((stk) => (
        <FevStockInfo stockObj={stk} key={stk.name} />
      ))}
    </div>
  );
}

function FevStockInfo(stockObj) {
  return (
    <div className="stockItm" style={{marginBottom:'1rem'}}>
      <div className="left">
        <img className="stockImg" src={logo} alt="img" />
        <p className="sname">{stockObj.name}Rahad</p>
      </div>
      <div className="right">
        <p>${stockObj.price}</p>
      </div>
    </div>
  );
}

export default Favourites;
