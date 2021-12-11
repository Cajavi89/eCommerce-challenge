import React, { useEffect, useState } from 'react';
import Fetch from '../../assets/js/fetch'
import './styles.scss'

const Menu = () =>{
  const [datos, setDatos] = useState([])

  useEffect(()=>{
    Fetch().then(el=>setDatos(el))
  },[])


  return(
      <ul className="menu-container">
        <h1 className="menu-container__title">To Go Menu</h1>
        {datos.map(({id,name,price,img})=>
            <li key={id}>
              <div className="wrapper">
                <img src={img}  alt={name} className="wrapper__image" />
                <div className="wrapper__info-plate">
                  <h2 className="wrapper__info-plate--plate-name"> {name} </h2>
                  <h3 className="wrapper__info-plate--price"> {`$${price}`} </h3>
                  <button className="wrapper__info-plate--addPlate">Add to cart</button>
                </div>
              </div>
            </li>
        )}
      </ul>
  )

}

export default Menu;
