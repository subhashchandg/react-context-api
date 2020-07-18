import React, { useContext } from 'react';
import Product from './product';
import { ProductContext } from './product-context';

export default React.memo((props) => {
  const { cartItems, updateCart } = useContext(ProductContext);

  const removeFromCart = (id) => {
    if (cartItems.find((el) => el.id === id).count > 1) {
      updateCart(
        cartItems.map((el) =>
          el.id === id ? { ...el, count: el.count - 1 } : el
        )
      );
    } else {
      updateCart(cartItems.filter((el) => el.id !== id));
    }
  };
  return (
    <div className="product-container">
      {cartItems.length > 0 ? (
        cartItems.map((product) => (
          <Product
            product={product}
            buttonLabel="Remove from cart"
            clickHandler={removeFromCart.bind(this, product.id)}
          />
        ))
      ) : (
        <h2>You Donot Have Items in Your Cart Yet </h2>
      )}
    </div>
  );
});
