
import './styles.scss';

const ProductItem = ({data,handleAddItemToCart}) =>{
  const {img,name,price}= data
  return(
    <li>
      <div className="wrapper">
        <img src={img}  alt={name} className="wrapper__image" />
        <div className="wrapper__info-plate">
          <h2 className="wrapper__info-plate--plate-name"> {name} </h2>
          <h3 className="wrapper__info-plate--price"> {`$${price}`} </h3>
          <button className="wrapper__info-plate--addPlate" onClick={()=>handleAddItemToCart(data)}>Add to cart</button>
        </div>
      </div>
    </li>
  )
}

export default ProductItem
