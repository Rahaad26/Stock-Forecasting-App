import React, { useState,useEffect } from "react";
import Heart from "react-animated-heart";
import "./Stockinformation.css";
import D from "../img/D.png";
import X from "../img/X.png";
import Up from "../img/Up.png";
import Down from "../img/Down.png";
import axios from "axios";
import revenueData from "./data/revenueData.json";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

function StockInfo(stockobj) {
  const [values,setValues]= useState({
    id:"",
    username:"",
    email:""
  })
  axios.defaults.withCredentials = true;
  useEffect(()=>{
    
    axios.get('http://localhost:8081/')
    .then(res =>{
      console.log(res.data)
      setValues({id : res.data.userid,username: res.data.username,email : res.data.usernameemail});
    })
    .catch(err => console.log(err))

   },[])

 const hendelFav = async (event)=>{

  event.stopPropagation();
  const value={
    stockname:stockobj.stockobj.name,
    userid:parseInt(values.id)
  };
  axios
  .post("http://localhost:8081/addfab",value)
  .then((res) => {
    if (res.data.Added) {
    } 
    console.log(res);
  })
  .catch((err) => console.log(err));
};

  return (
    <>
      <Nav stockname={stockobj.stockobj.name} />

      <div className="Container">
        
        <div className="Graph">
        <Line className="LineChart"
          data={{
            labels: revenueData.map((data) => data.label),
            datasets: [
              {
                label: "Stock Price",
                data: revenueData.map((data) => data.revenue),
                backgroundColor: "#064FF0",
                borderColor: "#064FF0",
              },
            
            ],
          }}
          />
        </div>
        
        <StkInfo stockinfo={stockobj.stockobj} />

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
              <Heart isClick={isClick}  onClick={(event) => { hendelFav(event); setClick(!isClick) }}/>
            </div>
          </p>
        </div>
      </div>
    );
  }
  function StkInfo(stockinfo){
    
    return(
        <div className="StockData">
        <div className="Row">
          <div className="Info">
            <img className="icon" src={D} alt="Logo" />
            <div>
              <div>Open Price</div>
              <div>${stockinfo.stockinfo.openprice}</div>
            </div>
          </div>
          <div className="Info">
            <img className="icon" src={X} alt="Logo" />
            <div>
              <div>Volume</div>
              <div>${stockinfo.stockinfo.volume}</div>
            </div>
          </div>
        </div>
        <div className="Row">
          <div className="Info">
            <img className="icon" src={Up} alt="Logo" />
            <div>
              <div>52h Week High</div>
              <div>${stockinfo.stockinfo.high}</div>
            </div>
          </div>
          <div className="Info">
            <img className="icon" src={Down} alt="Logo" />
            <div>
              <div>52h Week Low</div>
              <div>${stockinfo.stockinfo.low}</div>
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

