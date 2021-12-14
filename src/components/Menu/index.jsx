import React, { useEffect, useState, useContext } from 'react';
import Fetch from '../../assets/js/fetch'
import './styles.scss'
import contextCartItems from '../../context/cartContext';
import ProductItem from '../ProductItem';

const Menu = () =>{
  const [product, setProduct] = useState([])
  const {item, setItem}= useContext(contextCartItems)
  useEffect(()=>{
    Fetch().then(el=>setProduct(el))
    console.log(item);
  },[item])

  function handleAddItem (data){
    const exist = item.find(el=> el.id === data.id)
    if(exist){
      setItem([...item,{...data['qty']= data['qty']+ 1}])
    }else{
      setItem([...item,{...data,qty:1}])
    }





  }


  return(
      <ul className="menu-container">
        <h1 className="menu-container__title">To Go Menu</h1>
        {product.map((product)=> <ProductItem key={product.id} data={product} handleAddItem={handleAddItem} /> )}
      </ul>
  )

}

export default Menu;
