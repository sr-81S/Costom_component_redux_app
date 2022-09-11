import React, { useState } from "react";
import "./style.css";
import CardData from "./CardData";
import { useDispatch } from "react-redux";
import { ADD } from "../redux/actions/action";


const Cards = () => {
  const [data, setData] = useState(CardData);
  
  const dispatch = useDispatch()

  const send = (e)=>{
    dispatch(ADD(e))
  }


  return (
    <>
      <div className="C-container">
        <h2 className="C-head-cart">Food Details</h2>
        <div className="C-container">
          <div className="card-section">
            {data.map((ele, id) => {
              return (
                <>
                  <div className="card" key={id}>
                    <div className="card-img">
                      <img
                        src={ele.imgdata}
                        alt=""
                        className="img-card"
                      />
                    </div>
                    <div className="card-text">
                      <h3 className="card-title">{ele.rname}</h3>
                      <p className="card-des">
                        Price: ₹ {ele.price}
                      </p>
                      <div className="card-btn">
                        <button className="C-btn-m add-cart-btn" onClick={()=>send(ele)} >Add to cart</button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
       
      </div>
     
    </>
  );
};

export default Cards;
