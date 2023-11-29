import React from "react";

function FeaturedProduct(props) {
  const { title, image, medium, size, prices, id, category, tag } = props;

  return (
    <>
      <div className="featured-product-box-el" id={id}>
        <div className="featured-product-img">
          <img src={image} alt="featured-product" />
        </div>
        <div className="featured-product-text">
          <h2>{title}</h2>
          <p>{medium}</p>
          <p>{size}</p>
          <p>£ {prices}</p>
        </div>
      </div>
    </>
  );
}

export default FeaturedProduct;
