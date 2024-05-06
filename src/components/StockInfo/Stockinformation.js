import React, { useState } from "react";
import Heart from "react-animated-heart";
import "./Stockinformation.css";
import D from "../img/D.png";
import X from "../img/X.png";
import Up from "../img/Up.png";
import Down from "../img/Down.png";


function StockInfo(stockobj) {
    console.log(stockobj)
  return (
    <>
      <Nav stockname={stockobj.stockname} />

      <div className="Container">
        
        <div className="Graph"></div>
        
        <StkInfo />

        <Predict />

      </div>
    </>
  );

  function Nav(stockname) {
    const [isClick, setClick] = useState(false);
    return (
      <div className="topNav">
        <div className="profile">
          <h2>{stockname.stockname}</h2>
          <p>
            <div className="App">
              <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
            </div>
          </p>
        </div>
      </div>
    );
  }
  function StkInfo(){
    return(
        <div className="StockData">
        <div className="Row">
          <div className="Info">
            <img className="icon" src={D} alt="Logo" />
            <div>
              <div>Open Price</div>
              <div>$9.453.76</div>
            </div>
          </div>
          <div className="Info">
            <img className="icon" src={X} alt="Logo" />
            <div>
              <div>Volume</div>
              <div>$2.782.002</div>
            </div>
          </div>
        </div>
        <div className="Row">
          <div className="Info">
            <img className="icon" src={Up} alt="Logo" />
            <div>
              <div>24h High</div>
              <div>782.00</div>
            </div>
          </div>
          <div className="Info">
            <img className="icon" src={Down} alt="Logo" />
            <div>
              <div>24h Low</div>
              <div>982.82</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function Predict(){
    return (
      <div className="ButtnContaner">
        <button className="forecastButton">Predict Future Price</button>
      </div>
    );
  }

}

export default StockInfo;
