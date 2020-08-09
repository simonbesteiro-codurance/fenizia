import React, { useState, useEffect } from "react";
import cartStore from "../stores/cartStore";
import CartDisplayItem from "./CartDisplayItem";
import "./CartDisplayItem.css";

function CartDisplay() {
  const [cart, setCart] = useState(cartStore.getCart());
  const [count, setCount] = useState(0);

  useEffect(() => {
    cartStore.addChangeListener(onChange);
    setCart(cartStore.getCart());
    return () => {
      cartStore.removeChangeListener(onChange);
    };
  }, [count]);

  function onChange() {
    setCart(cartStore.getCart());
  }

  function toRender() {
    setCount(count + 1);
  }

  return (
    <>
    <section className="main-box-display">
       {cart.map((cartProduct) => (
            <CartDisplayItem
            key={cartProduct.product.id}
            id={cartProduct.product.id}
            title={cartProduct.product.product.title}
            price={cartProduct.product.product.price}
            cover={cartProduct.product.product.cover}
            amount={cartProduct.amount}
            toRender={toRender}
            />
        ))}
      </section>
    </>
  );
}

export default CartDisplay;
