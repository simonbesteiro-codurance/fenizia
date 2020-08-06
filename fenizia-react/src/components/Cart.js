import React, { useState, useEffect } from "react";

import userStore from "../stores/userStore";
import productStore from "../stores/productStore";
import { loadProducts } from "../actions/productActions";
import { loadCart } from "../actions/userActions";
import authStore from "../stores/authStore"
import cartStore from "../stores/cartStore"
import { loadCart } from "../actions/cartActions";

import "./Cart.css";

function Cart() {
  const [cart, setCart] = useState(cartStore.getCart());

  //   console.log(cart);

  useEffect(() => {
    cartStore.addChangeListener(onChange);
    return () => {
      cartStore.removeChangeListener(onChange);
    };
  }, [cart.length]);

  function onChange() {
    setCart(cartStore.getCart());
  }

  return (
    <>
      {/* {cart.map((product) => (
        <div className="main-box">
        <img className="box__image" src="https://imagessl0.casadellibro.com/a/l/t1/90/9788401023590.jpg" />
        <div className="box__contain">
            <div className="box__text">
                <h3 className="box__title">product.product.title</h3>
                <p className="box__author">product.product.author</p>
                <p className="box__sinopsis">Sinopsis</p>
                <p className="box__description">product.product.description</p>
            </div>
            <div className="box__button">
                <p className="box__number-price">product.product.price<span>€</span></p>
                <p className="box__vat">IVA INCLUÍDO</p>
                <Link to="/" className="box__button-cart">Agregar a la cesta</Link>
                <Link to="/" className="box__button-star">Agregar a favoritos</Link>
            </div>
        </div>
    </div>     
    ))} */}
      {cart.length}
    </>
  );
}

export default Cart;
