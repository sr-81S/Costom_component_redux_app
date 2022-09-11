import React, { useEffect, useState } from 'react'
import "./style.css"
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { DLT } from "../redux/actions/action";
import {useDispatch} from "react-redux"
import { useNavigate } from "react-router-dom";

const CardDetails = () => {

  const {id} = useParams()
  console.log(id);
  const getData = useSelector((state)=>state.cartreducer.carts)
  const [data, setData] = useState([])
  console.log(data);

  const select = ()=>{
    let finalData = getData.filter((e)=>{
      return e.id == id
    })
    setData(finalData)
  }

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const dlt = (id)=>{
    dispatch(DLT(id))
    navigate('/card')
  }


  useEffect(() => {
    select()
  }, [id])
  

  return (
   <>
    <div className="C-container">
      <h2 className='C-head-cart'>Cart Iteams</h2>
      <div className="C-container cart_flex">
        <div className="cart-section C-grid C-grid-two-column">
          {
            data.map((ele,id)=>{
              return(
                <>
                <div className='img_cart'>
                <img src={ele.imgdata} alt="cart_img" className='cart_item_img' />
              </div>
              <div className="cart_detail">
                  <p className='res_name'><strong>Dish Name:</strong> {ele.rname} </p>
                  <div className="cart_P_R crt_flx">
                    <p className='res_name'><strong>Price :</strong> ₹{ele.price}</p>
                    <p className='res_name'><strong>Rating :</strong> <span className='rating'>{ele.rating}★</span> </p>
                  </div>
                  <div className="cart_P_s crt_flx">
                    <p className='res_name'><strong>Types :</strong> {ele.address} </p>
                    <p className='res_name'><strong>Order Review :</strong> {ele.somedata} </p>
                  </div>
                    <div className="cart_P_s crt_flx">
                      <p className='res_name'><strong>Total :</strong> ₹ {ele.price}</p>
                      <p className='res_name'><strong>Remove :</strong> <i className="fa fa-trash" onClick={()=>dlt(ele.id)} style={{color:"red",cursor:"pointer"}}></i></p>
                    </div>
                    <div className="cart_Ps cut_flex">
                      <div>
                        <span className='inc-btn' ><span className='inc_bt'>-</span> {ele.qnty} <span className='inc_bt'>+</span></span>
                      </div>
                    </div>
              </div>
                </>
              )
            })
          }
        </div>
      </div>
    </div>
   </>
  )
}

export default CardDetails