import "./ProductDescription.css";
import cart from "../../assets/images/icon-cart-button.svg";
import minus from "../../assets/images/icon-minus.svg";
import plus from "../../assets/images/icon-plus.svg";
import { ProductData } from "../../ProductData";
import { useState } from "react";

const ProductDescription = () => {
  const [cartItem, setCartItem] = useState(0);

  const { subtitle, title, description, price } = ProductData;
  return (
    <div className="productDescription__container">
      <div className="description-wrapper">
        <h3>{subtitle}</h3>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="price-container">
          <div className="price-wrapper">
            <strong>${price}.00</strong>
            <p>50%</p>
          </div>
          <strong className="price-sale">$250.00</strong>
        </div>
        <div className="buttons">
          <input type="number" value={cartItem} />
          <div className="minus-plus">
            <img
              src={minus}
              alt="minus"
              onClick={() => setCartItem(cartItem - 1)}
            ></img>
            <img
              src={plus}
              alt="plus"
              onClick={() => setCartItem(cartItem + 1)}
            ></img>
          </div>
          <button>
            <img src={cart} alt="cart"></img>Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
