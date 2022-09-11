import React, { useEffect, useState } from "react";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import Menu from '@mui/material/Menu';
import "./style.css";
import im from "./cart.png"
import { useSelector,useDispatch } from "react-redux";
import { DLT } from "../redux/actions/action";

const Navtop = () => {

  const [price, setPrice] = useState()

  const getData = useSelector((state)=>state.cartreducer.carts)
 
  const dispatch = useDispatch()


  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dlt = (id)=>{
    dispatch(DLT(id))
  }

  const total =()=>{
      let price =0
      getData.map((ele,l)=>{
        price = price + ele.price
      })
      setPrice(price)
  }

  useEffect(() => {
   total()
  }, [total])
  

  return (
    <>
      <header className="header">
        <h1 className="brand-name">
          <Link className="brand-name" to="/">
            Cola
          </Link>
        </h1>
        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-link">
              <Link className="navbar-link" to="/">
                home
              </Link>
            </li>
            <Badge  badgeContent={getData.length!==0?<span className="C-badge">{getData.length}</span>: null} color="success"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            >
              <li className="navbar-link">Cart</li>
            </Badge>
          </ul>
          <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {
          getData.length?
           
            <div style={{width: "45rem",padding: "1rem"}}>
             {
              getData.map((ele,id)=>{
                return(
                  <>
                  <div className="style-cart-contain" >
                    <Link to={`/cart/${ele.id}`} onClick={handleClose} style={{maxWidth: "40%"}} > <img src={ele.imgdata} style={{maxWidth: "100%"}} alt="image selet" /></Link>
                    <div className="style-cart-detail">
                      <p><strong>Dish: </strong> {ele.rname} </p>
                      <p><strong>Price: </strong> ₹{ele.price} </p>
                      <p><strong>Quantity: </strong> {ele.qnty} </p>
                    </div>
                    <div className="style-cart-icon">
                      <i className="fa fa-trash icon-size" onClick={()=>dlt(ele.id)} style={{color:"red",cursor:"pointer"}}></i>
                    </div>
                </div>
                  </>
                )
              })
             }
              <p><strong>Total: </strong>₹{price}</p>
            </div>
           
          :
          <div className="cart_dropDown">
          <i className="fas fa-close icon_close" onClick={handleClose} ></i>
          <img src={im} alt="" className="cart-img" />
          <p className="em-cart">Your cart is empty</p>
        </div>
        }
        
      </Menu>
        </nav>
      </header>
    </>
  );
};

export default Navtop;
