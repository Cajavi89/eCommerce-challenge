import React, { useState } from 'react';


const contextCartItems = React.createContext({});

export const CartContextProvider= ({children}) =>{
  const [itemCart,setItemCart]= useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  return <contextCartItems.Provider value={{itemCart,setItemCart,totalPrice, setTotalPrice}}>
    {children}
  </contextCartItems.Provider>
}

export default contextCartItems;
