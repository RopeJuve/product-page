import "./ProductImage.css";
import img from "../../assets/images/image-product-1.jpg";
import prev from "../../assets/images/icon-previous.svg";
import next from "../../assets/images/icon-next.svg";

const ProductImage = () => {
  return (
    <div className="productImage__container">
      <img src={img} alt="productImage" />
      <div className="arrows">
        <button className="arrow">
          <img src={prev} alt="arrowPrev"></img>
        </button>
        <button className="arrow">
          <img src={next} alt="arrowNext"></img>
        </button>
      </div>
    </div>
  );
};

export default ProductImage;
