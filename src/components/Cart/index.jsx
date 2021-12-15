import React, { useContext} from 'react';
import './styles.scss'
import  contextCartItems  from '../../context/cartContext';
import CartItem from '../CartItem'

const Cart = () =>{
  const {itemCart,setItemCart,totalPrice,setTotalPrice } = useContext(contextCartItems)
  let totalTaxes=(0.0975 * totalPrice).toFixed(2)
  let grandTotal = ((0.0975 * totalPrice ) + totalPrice).toFixed(2)

  //agregar productos al carrito
  function handleAddItem (data){
    const currentProduct = itemCart.find(el=> el.id === data.id)

    if(currentProduct){
      const others = itemCart.filter(el=> el.id !== data.id)
      setTotalPrice(totalPrice + currentProduct.price)
      setItemCart([...others,{...data, qty: currentProduct.qty + 1}])
    }
  }

  //restar cantidad de productos del carrito
  function handleLessItem (data){
    //confirmar si el producto enviado desde el onClick existe en el carrito de compras
    const currentProduct = itemCart.find(el=> el.id === data.id)

    //si existe en el carrito solo actualizar la cantidad de unindades (qty - 1) ->qty = quantity
    if(currentProduct){
      const others = itemCart.filter(el=> el.id !== data.id)
      if(currentProduct.qty>0){
        setTotalPrice(totalPrice - currentProduct.price)
        setItemCart([{...data, qty: currentProduct.qty - 1},...others])
      }

      //Eliminar producto del carrito automaticamente si la cantidad llega a 0
      if(currentProduct.qty <= 1){
        const deleted = others.filter(el=> el.id!== currentProduct.id)
        setItemCart([...deleted])
      }
    }


  }

  return(
    <ul className="cart-container">
      <h1>Your Cart</h1>
      {itemCart.length===0
        ? <h3>is empty </h3>
        :
        itemCart.map((props)=> <CartItem key={props.id} props={props} handleAddItem={handleAddItem} handleLessItem={handleLessItem}/> )}
      <ul className="cart-totals">
        <li className="cart-totals__li">Subtotal:  <span className="cart-totals__li--span">{`$${totalPrice}`}</span></li>
        <li>Tax:<span className="cart-totals__li--span"> {`$${totalTaxes}`} </span></li>
        <li>Total: <span className="cart-totals__li--span"> {`$${grandTotal}`} </span></li>
      </ul>
    </ul>
  )
}

export default Cart;
