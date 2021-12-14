import React, { useEffect, useContext,useState} from 'react';
import './styles.scss'

import  contextCartItems  from '../../context/cartContext';
import CartItem from '../CartItem'

const Cart = () =>{
  const {item } = useContext(contextCartItems)
  const [cantidad,setCantidad]= useState(1)
  const [cart,setCart]= useState([])
  useEffect(()=>{
    setCart(cart.concat(item))
  },[])

  const handleSumIndividualPrice = (id)=>{
    setCantidad(cantidad+1)

  }
  // const handleResIndividualPrice=()=>{
  //   if(cantidad<1)return alert('minimun 1 item')
  //   setCantidad(cantidad-1)
  // }

  return(
    <ul className="cart-container">
      <h1>Your Cart</h1>
      {item.length===0
        ? <h3>is empty </h3>
        :
        item.map((props,qty,index)=> <CartItem key={Math.random()} props={props}  handleSumIndividualPrice={handleSumIndividualPrice} /> )}
      <ul className="cart-totals">
        <li className="cart-totals__li">Subtotal:  <span className="cart-totals__li--span">  $20</span></li>
        <li>Tax:<span className="cart-totals__li--span">$1.96</span></li>
        <li>Total: <span className="cart-totals__li--span">$21.96</span></li>
      </ul>
    </ul>
  )
}

export default Cart;
