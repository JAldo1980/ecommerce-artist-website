import React from "react";
import NavComponent from "./NavComponent";
import ProductList from "./ProductList";

function Home() {
  return (
    <>
      <NavComponent />
      <div className="home-el">
        <h2>Northern Artist</h2>
        <p>
          David attended Salford School of Art in the mid sixties before
          embarking on a career in design. More recently he has returned to
          painting. David's sheepscapes add colour, character and humour to the
          work we show, and, in David's unique style, wonderfully reflect the
          landscape that surrounds our gallery.
        </p>
      </div>
      <ProductList />
    </>
  );
}

export default Home;
