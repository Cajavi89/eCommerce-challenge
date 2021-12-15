import './styles.scss';
import chevron from '../../assets/images/chevron.svg'




const ItemCart = ({props, handleAddItem,handleLessItem}) => {
  const {name,img, price,qty} = props
  return(
    <li>
      <div className="wrapper-cart">
        <img className="wrapper-cart__imagen" src={img} alt={name} />
        <div className="wrapper-cart__info">
          <div className="wrapper-cart__info__title"> {name} </div>
          <div className="wrapper-cart__info__unit-price"> {`$${price}`} </div>
          <div className="wrapper-cart__info__quantity-price">
            <div className="wrapper-cart__info__quantity-price__quantity">
              <button className="wrapper-cart__info__quantity-price__quantity--decrease" onClick={()=>handleLessItem(props)}><img className="wrapper-cart__info__quantity-price__quantity--decrease--imagen" src={chevron} alt="chevron"  /></button>
              <span> {qty} </span>
              <button className="wrapper-cart__info__quantity-price__quantity--increase" onClick={()=>handleAddItem(props)}><img className="wrapper-cart__info__quantity-price__quantity--increase--imagen" src={chevron} alt="chevron"  /></button>
            </div>
            <div className="wrapper-cart__info__quantity-price--price"> {`$${price * qty}`} </div>
          </div>
        </div>
      </div>
    </li>
  )
}

export default ItemCart;
