import React, { useState, createContext } from 'react';

export const ProductContext = createContext();
const allProducts = [
  { id: 123, name: 'HP Laptop', price: '$122.33' },
  { id: 124, name: 'Del Laptop', price: '$120.33' },
  { id: 125, name: 'MAC Laptop', price: '$127.33' },
  { id: 126, name: 'Lenovo Laptop', price: '$129.33' },
  { id: 127, name: 'Toshiba Laptop', price: '$189.33' },
];

export const ProductContextProvider = (props) => {
  const [cartItems, updateCart] = useState([]);
  return (
    <ProductContext.Provider
      value={{
        products: allProducts,
        cartItems: cartItems,
        updateCart: updateCart,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
