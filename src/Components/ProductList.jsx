import React from "react";
import Product from "./Product";

function ProductList() {
  const products = [
    {
      title: "Painting title 1",
      image: "/images/northern-1.png",
      medium: "Acrylic on board",
      size: "7 x 9 inches",
      price: 325,
      id: 1,
      category: "street",
      tag: "snow",
    },
    {
      title: "Painting title 2",
      image: "/images/northern-2.png",
      medium: "Acrylic on board",
      size: "7 x 9 inches",
      price: 325,
      id: 2,
      category: "street",
      tag: "snow",
    },
    {
      title: "Painting title 3",
      image: "/images/northern-3.png",
      medium: "Acrylic on board",
      size: "7 x 9 inches",
      price: 325,
      id: 3,
      category: "street",
      tag: "snow",
    },
    {
      title: "Painting title 4",
      image: "/images/northern-4.png",
      medium: "Acrylic on board",
      size: "7 x 9 inches",
      price: 325,
      id: 4,
      category: "street",
      tag: "snow",
    },
    {
      title: "Painting title 5",
      image: "/images/northern-5.png",
      medium: "Acrylic on board",
      size: "7 x 9 inches",
      price: 325,
      id: 5,
      category: "street",
      tag: "snow",
    },
    {
      title: "Painting title 6",
      image: "/images/northern-6.png",
      medium: "Acrylic on board",
      size: "7 x 9 inches",
      price: 325,
      id: 6,
      category: "street",
      tag: "snow",
    },
    {
      title: "Painting title 7",
      image: "/images/northern-7.png",
      medium: "Acrylic on board",
      size: "7 x 9 inches",
      price: 325,
      id: 7,
      category: "street",
      tag: "snow",
    },
    {
      title: "Painting title 8",
      image: "/images/northern-8.png",
      medium: "Acrylic on board",
      size: "7 x 9 inches",
      price: 325,
      id: 8,
      category: "street",
      tag: "snow",
    },
    {
      title: "Painting title 9",
      image: "/images/northern-9.png",
      medium: "Acrylic on board",
      size: "7 x 9 inches",
      price: 325,
      id: 9,
      category: "street",
      tag: "snow",
    },
    {
      title: "Painting title 10",
      image: "/images/northern-10.png",
      medium: "Acrylic on board",
      size: "7 x 9 inches",
      price: 325,
      id: 10,
      category: "street",
      tag: "snow",
    },
    {
      title: "Painting title 11",
      image: "/images/northern-12.png",
      medium: "Acrylic on board",
      size: "7 x 9 inches",
      price: 325,
      id: 11,
      category: "street",
      tag: "snow",
    },
    {
      title: "Painting title 12",
      image: "/images/northern-12.png",
      medium: "Acrylic on board",
      size: "7 x 9 inches",
      price: 325,
      id: 12,
      category: "street",
      tag: "snow",
    },
    {
      title: "Painting title 13",
      image: "/images/northern-13.png",
      medium: "Acrylic on board",
      size: "7 x 9 inches",
      price: 325,
      id: 13,
      category: "street",
      tag: "snow",
    },
    {
      title: "Painting title 14",
      image: "/images/northern-14.png",
      medium: "Acrylic on board",
      size: "7 x 9 inches",
      price: 325,
      id: 14,
      category: "street",
      tag: "snow",
    },
  ];

  return (
    <div className="product-home-highlight">
      {(() => {
        const productElements = [];
        for (let i = 0; i < 3; i++) {
          const product = products[i];
          if (product) {
            productElements.push(
              <Product
                key={product.id}
                title={product.title}
                image={product.image}
                id={product.id}
              />
            );
          }
        }
        return productElements;
      })()}
    </div>
  );
}

export default ProductList;
