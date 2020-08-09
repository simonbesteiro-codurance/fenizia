import React from 'react'
import { Link } from "react-router-dom";
import cartStore from "../stores/cartStore";
import "./CartDisplayItem.css";

function CartDisplayItem({ title, id, price, cover, amount, toRender }) {
  function deleteToCart(id) {
    cartStore.removeCartProduct(id);
    toRender();
  }

  return (
    <>
    <h3>hola</h3>
      <div className="box__contain-display">
          <img className="box__image box__image--small-display" src={cover} alt="Book" />
          <h3 className="box__title-display">{title}</h3>        
          <p className="box__price--amount-display">{amount}</p>        
          <p className="box__price--display">{price * amount}<span>€</span></p>        
          <div className="trash-contain">
              <Link onClick={() => deleteToCart(id)} className="trash-display"></Link>
          </div>
      </div>     
    </>
  );
}

export default CartDisplayItem;
