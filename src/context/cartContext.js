import React, { useState } from 'react';

const contextCartItems = React.createContext({});

export function CartContextProvider ({children}){
  const [item,setItem]= useState([])
  const [qty, setQty] = useState(1)
  return <contextCartItems.Provider value={{item, setItem,qty, setQty}}>
    {children}
  </contextCartItems.Provider>
}

export default contextCartItems;
