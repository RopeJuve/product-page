import "./ModalCart.css";
import prodImg from "../../assets/images/image-product-1.jpg";

import deleteIcon from "../../assets/images/icon-delete.svg";
import { ProductData } from "../../ProductData";

const ModalCart = ({ modalCartShow, items }) => {
  const { title, price } = ProductData;
  const totalPrice = price * items;
  return (
    <div
      className={
        modalCartShow ? "modal-cart-container show" : "modal-cart-container"
      }
    >
      <div className="title-wrapper">
        <h1>Cart</h1>
      </div>
      <div className="item-wrapper">
        <img src={prodImg} alt=""></img>
        <div>
          <p>{title}</p>
          <p>
            {`${price}.00 x ${items} `}
            <strong>${totalPrice}.00</strong>
          </p>
        </div>
        <img src={deleteIcon} alt="" />
      </div>
      <button>Checkout</button>
    </div>
  );
};

export default ModalCart;
