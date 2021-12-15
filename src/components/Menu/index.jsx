import React, { useEffect, useState, useContext } from 'react';
import Fetch from '../../assets/js/fetch'
import './styles.scss'
import contextCartItems from '../../context/cartContext';
import ProductItem from '../ProductItem';

const Menu = () =>{
  const [product, setProduct] = useState([])
  const {itemCart, setItemCart,totalPrice,setTotalPrice}= useContext(contextCartItems)
  useEffect(()=>{
    Fetch().then(el=>setProduct(el))
  },[])

  //agregar productos del llamado fetch al carrito de compras.
  const handleAddItemToCart = (data) =>{
    const currentProduct = itemCart.find(el=> el.id === data.id)

    if(currentProduct){
      const others = itemCart.filter(el=> el.id !== data.id)
      setItemCart([{...data, qty: currentProduct.qty + 1},...others])
    }else{
      setItemCart([{...data,qty:1},...itemCart])
    }
    setTotalPrice(totalPrice + data.price)
  }


  return(
      <ul className="menu-container">
        <h1 className="menu-container__title">To Go Menu</h1>
        {product.map((product)=> <ProductItem key={product.id} data={product} handleAddItemToCart={handleAddItemToCart} /> )}
      </ul>
  )

}

export default Menu;
