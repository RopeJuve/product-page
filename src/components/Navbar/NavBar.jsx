import "./Navbar.css";
import logo from "../../assets/images/logo.svg";
import cart from "../../assets/images/icon-cart.svg";
import avatar from "../../assets/images/image-avatar.png";
import menu from "../../assets/images/icon-menu.svg";
const NavBar = () => {
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
          <img src={cart} alt={cart} />
          <img className="avatar" src={avatar} alt={avatar} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
