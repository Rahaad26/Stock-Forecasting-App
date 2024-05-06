import React, { useState } from "react";
import ReactDom from "react-dom/client";
import Profile from "./profile/profile";
import Favourites from "./Fabourites/favourites";
import Stockinfo from "./StockInfo/Stockinformation";
import logo from "./img/stock_app_logo-removebg-preview_2.png";
import home from "./img/home.png";
import favourite from "./img/favourite.png";
import profile from "./img/profile.png";

import "./home.css";
const Stocks = [
  {
    name: "Focaccia",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
  },
  {
    name: "Focaccia",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
  },
  {
    name: "Focaccia",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
  },
  {
    name: "Focaccia",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
  },
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
  {
    name: "Pizza Spinaci",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
  },
  {
    name: "Pizza Spinaci",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
  },
  {
    name: "Pizza Funghi",
    price: 12,
    photoName: "pizzas/funghi.jpg",
  },
  {
    name: "Pizza Salamino",
    price: 15,
    photoName: "pizzas/salamino.jpg",
  },
  {
    name: "Pizza Prosciutto",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
  },
];

function App() {
  const stock=Stocks
  const [track, setTrack] = useState(1); // Initialize track state with a default value
  const [srcitm, setSrcitm] = useState("");
  const [scarcinfo, setScarcinfo] = useState(0);
  const[data,setData] = useState({
     stockname: "",
     stockprice:"",
  })
  return (
    <div className="App">
      {track === 1 && <Scarch />}
      {scarcinfo === 0 && track === 1 && <StocksBox />}
      {scarcinfo === 1 && track === 1 && <SrcStocksBox />}
      {track === 2 && <Favourites />}

      {track === 3 && <Profile />}

      {track === 4 && <Stockinfo  stockobj={data} />}

      <div className="bottomNav">
        <button className="btn" onClick={() => setTrack(1)}>
          <img className="btnimg" src={home} alt="Home" />
        </button>
        <button className="btn" onClick={() => setTrack(2)}>
          <img className="btnimg" src={favourite} alt="Home" />
        </button>
        <button className="btn" onClick={() => setTrack(3)}>
          <img className="btnimg" src={profile} alt="Home" />
        </button>
      </div>
    </div>
  );

  function StocksBox() {
    return (
      <div className="outerbox">
        <div className="stocks">
          {Stocks.map((stock) => (
            <StockInfo stockObjs={stock} key={stock.name} />
          ))}
        </div>
      </div>
    );
  }
  function SrcStocksBox() {
    return (
      <div className="outerbox">
        <div className="stocks"></div>
      </div>
    );
  }

  function StockInfo(stockObjs) {
      console.log(stockObjs.name)
    return (
      <div className="stockItm" onClick={(event) =>{
        setData({
          name:"Mushfique ur rahman",
          price:10000,
        }
        );
        setTrack(4)
        
        }}>
        <div className="left">
          <img className="stockImg" src={logo} alt="IMG" />
          
          <p className="sname">{stockObjs.name}Mushfik</p>
        </div>
        <div className="right">
          <p>${stockObjs.price}</p>
        </div>
      </div>
    );
  }

  function Scarch() {
    return (
      <div className="topNav">
        <div className="profile">
          <h2>Welcome Back!</h2>
          <p>HI</p>
        </div>
        <div>
          <input
            type="text"
            className="Searchbar"
            value={srcitm}
            placeholder="Search"
            onChange={(event) => setSrcitm(event.target.value)}
          />
        </div>
      </div>
    );
  }
}

export default App;