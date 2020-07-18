import React, { useContext } from 'react';
import Product from './product';
import { ProductContext } from './product-context';

export default React.memo((props) => {
  const { products, updateCart, cartItems } = useContext(ProductContext);
  const addToCartHandler = (id) => {
    if (cartItems.find((el) => el.id === id)) {
      updateCart(
        cartItems.map((el) =>
          el.id === id ? { ...el, count: el.count + 1 } : el
        )
      );
    } else {
      updateCart([
        ...cartItems,
        { ...products.find((el) => el.id === id), count: 1 },
      ]);
    }
  };
  return (
    <div className="product-container">
      {products.map((product) => (
        <Product
          product={product}
          buttonLabel="Add to cart"
          clickHandler={addToCartHandler.bind(this, product.id)}
        />
      ))}
    </div>
  );
});
