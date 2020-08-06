import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import userStore from "../stores/userStore";
import productStore from "../stores/productStore";
import { loadCart } from "../actions/userActions";
import authStore from "../stores/authStore"
import cartStore from "../stores/cartStore"
import { loadCart } from "../actions/cartActions";

import "./Cart.css";
import CartList from "./CartList";

function Cart() {
  const [user, setUser] = useState(authStore.getUserProfile());
  const [product, setProduct] = useState(productStore.getProduct());
  const [cart, setCart] = useState(cartStore.getCart(product));
  const [product, setProduct] = useState(productStore.getProductById(cart));
  

  useEffect(() => {
    authStore.addChangeListener(onChange);
    cartStore.addChangeListener(onChange);
    productStore.addChangeListener(onChange);
    if (cart.length === 0) loadCart();
    return () => {
      authStore.removeChangeListener(onChange);
      cartStore.removeChangeListener(onChange);
      productStore.removeChangeListener(onChange);
    };
  }, [user, cart]);

  function onChange() {
    setUser(authStore.getUserProfile());
    setCart(cartStore.getCart(user));
    setProduct(productStore.getProduct());
  }

  return (
    <>
      {cart.map((product) => (
        <CartList 
        
        />   
    ))}
    </>
  );
}

export default Cart;
