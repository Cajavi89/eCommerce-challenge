import React, {useState, useEffect} from 'react';
import './styles.scss'
import chevron from '../../assets/images/chevron.svg'

const data = [
  {
    name:"French fries with ketchup",
    img:"https://i.ibb.co/XXjgD4Q/plate-bacon-eggs.png",
    price:4.95
  },
  {
    name:"French fries with ketchup 2",
    img:"https://i.ibb.co/XXjgD4Q/plate-bacon-eggs.png",
    price:3.80
  },
  {
    name:"French fries with ketchup 3",
    img:"https://i.ibb.co/XXjgD4Q/plate-bacon-eggs.png",
    price:2.5
  }
]
const Cart = () =>{
  const [items, setItems]= useState([])
  useEffect(()=>{
    setItems(data)
  },[])

  return(
    <ul className="cart-container">
      <h1>Your Cart</h1>
      {items.map(({name,img, price})=>
        <li key={Math.random()}>
          <div className="wrapper-cart">
            <img className="wrapper-cart__imagen" src={img} alt={name} />
            <div className="wrapper-cart__info">
              <div className="wrapper-cart__info__title"> {name} </div>
              <div className="wrapper-cart__info__unit-price"> {`$${price}`} </div>
              <div className="wrapper-cart__info__quantity-price">
                <div className="wrapper-cart__info__quantity-price__quantity">
                  <button className="wrapper-cart__info__quantity-price__quantity--decrease"><img className="wrapper-cart__info__quantity-price__quantity--decrease--imagen" src={chevron} alt="chevron" /></button>
                  <span>2</span>
                  <button className="wrapper-cart__info__quantity-price__quantity--increase"><img className="wrapper-cart__info__quantity-price__quantity--increase--imagen" src={chevron} alt="chevron" /></button>
                </div>
                <div className="wrapper-cart__info__quantity-price--price"> {`$${price}`} </div>
              </div>
            </div>
          </div>

        </li>
      )}
      <ul className="cart-totals">
        <li className="cart-totals__li">Subtotal:  <span className="cart-totals__li--span">  $20</span></li>
        <li>Tax:<span className="cart-totals__li--span">$1.96</span></li>
        <li>Total: <span className="cart-totals__li--span">$21.96</span></li>
      </ul>
    </ul>
  )
}

export default Cart;
