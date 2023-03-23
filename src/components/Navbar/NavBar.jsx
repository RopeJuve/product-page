import "./Navbar.css";
import logo from "../../assets/images/logo.svg";
import cart from "../../assets/images/icon-cart.svg";
import avatar from "../../assets/images/image-avatar.png";
import menu from "../../assets/images/icon-menu.svg";
import { useState } from "react";
import ModalCart from "../ModalCart/ModalCart";

const NavBar = ({ cartItems }) => {
  const [cartModalShow, setCartModalShow] = useState(false)
  return (
    <div className="navBar__container">
      <div className="navBar__container-wrapper">
        <div className="flex-c-g">
          <img className="menu" src={menu} alt={menu} />
          <img src={logo} alt={logo} />
          <div className="navLinks">
            {["Collection", "Man", "Women", "About", "Contact"].map(
              (item, index) => (
                <a key={`${item}-${index}`} href="/">
                  {item}
                </a>
              )
            )}
          </div>
        </div>
        <div className="flex-c-g">
          <div className="cart-wrapper">
            <div className={cartItems !== 0 ?"cart-items": 'hidden'} >{cartItems}</div>
            <img src={cart} alt={cart} onClick={() => setCartModalShow(!cartModalShow)} />
            <ModalCart modalCartShow={true} items={3} />
          </div>
          <img className="avatar" src={avatar} alt={avatar} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
