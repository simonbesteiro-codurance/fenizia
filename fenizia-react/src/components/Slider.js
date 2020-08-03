import React, { useState, useEffect } from "react";
import productStore from "../stores/productStore";
import { loadProducts } from "../actions/productActions";
import "./Slider.css";

function Slider() {
  const [products, setProducts] = useState(productStore.getProduct());

  useEffect(() => {
    productStore.addChangeListener(onChange);
    if (products.length === 0) loadProducts();
    return () => productStore.removeChangeListener(onChange);
  }, [products.length]);

  function onChange() {
    setProducts(productStore.getProduct());
  }

  // slice must be done in the store!
  const mainProducts = products.slice(0, 10);

  return (
    <section className="slider">
      <div className="slider__text">
        <p className="slider__title">LIBROS - Novedades</p>
        <p className="slider__view-all">VER TODO</p>
      </div>
      <div className="slider__content">
        {mainProducts.map((element) => (
          <div key={element.id} className="slider__item">
            <img
              key={element.id}
              alt={element.product.title}
              className="slider__image"
              src={element.product.cover}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Slider;
