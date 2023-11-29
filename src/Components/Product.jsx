import React from "react";
import { Link } from "react-router-dom";

function Product(props) {
  const { title, image, medium, size, prices, id, category, tag } = props;
  const handleClick = () => {
    console.log(id);
  };

  return (
    <>
      <div id={id} className="product-box-el" onClick={handleClick}>
        <Link to="#">
          <div className="product-box-img">
            <img src={image} alt="product-img" />
          </div>
          <div className="product-box-title">
            <h3>{title}</h3>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Product;
