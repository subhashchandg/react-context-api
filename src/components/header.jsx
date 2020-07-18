import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from './product-context';
export default (props) => {
  const { cartItems } = useContext(ProductContext);
  return (
    <div className="header">
      <div className="headerItems">
        <Link to="/products">
          <p>Products</p>
        </Link>
        <Link to="/cart">
          <p>
            cart ({cartItems.reduce((accum, el) => accum + (el.count || 0), 0)})
          </p>
        </Link>
      </div>
    </div>
  );
};
