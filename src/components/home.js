import React, { useEffect, useState } from "react";
import ReactDom from "react-dom/client";
import Profile from "./profile/profile";
import Favourites from "./Fabourites/favourites";
import Stockinfo from "./StockInfo/Stockinformation";
import logo from "./img/stock_app_logo-removebg-preview_2.png";
import home from "./img/home.png";
import favourite from "./img/favourite.png";
import profile from "./img/profile.png";
import axios from "axios";
import "./home.css";

function App() {
const [stocks, setStocks] = useState([]); 
const [track, setTrack] = useState(1);
const [srcitm, setSrcitm] = useState("");
const [scarcinfo, setScarcinfo] = useState(0);
axios.defaults.withCredentials = true;

useEffect(() => {
  axios.get('http://localhost:8081/stocks')
    .then((res) => {
        setStocks(res.data)
    })
    .catch(error => console.error("Error fetching stock data:", error));
},[]);


const[data,setData] = useState({
  stockname: "",
  stockid: "",
  stockprice:"",
  high:"",
  low:"",
  openprice:"",
  volume:'',

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
          {stocks.map((stock,i) => (
            <StockInfo stockObjs={stock} key={i}/>
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
      
    return (
      <div className="stockItm" onClick={(event) =>{
        setData({
          name:stockObjs.stockObjs.name,
          stockid:stockObjs.stockObjs.stock_id,
          price:stockObjs.stockObjs.price,
          high:stockObjs.stockObjs.high,
          low:stockObjs.stockObjs.low,
          openprice:stockObjs.stockObjs.opening_price,
          volume:stockObjs.stockObjs.volume,
        }
        );
        setTrack(4)
        }}>

        <div className="left">
          <img className="stockImg" src={logo} alt="IMG" />
          
          <p className="sname">{stockObjs.stockObjs.name}</p>
        </div>
        <div className="right">
          <p>${stockObjs.stockObjs.price}</p>
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

