import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ProductListItem.css";
import cartStore from "../stores/cartStore";

function ProductListItem({ title, id, author, price, cover, description }) {
  function addToCart(id) {
    cartStore.addCartProduct(id);
    addClassRenderCart();
  }
  function addItemFavourites(id) {}

  function addClassRenderCart() {
    // let active = true;
    let classNameNew = "menu--active";

    return <div className={classNameNew}>Menu</div>;
  }

  return (
    <div className="main-box">
      <img className="box__image" src={cover} alt="Book" />
      <div className="box__contain">
        <div className="box__text">
          <h3 className="box__title">{title}</h3>
          <p className="box__author">{author}</p>
          <p className="box__sinopsis">Sinopsis</p>
          <p className="box__description">{description}</p>
        </div>
        <div className="box__button">
          <div className="box__complet-price">
            <p className="box__number-price">
              {price}
              <span>€</span>
            </p>
            <p className="box__vat">IVA INCLUÍDO</p>
          </div>
          <div className="box__column-button">
            <Link onClick={() => addToCart(id)} className="box__button-cart">
              Agregar a la cesta
            </Link>
            <Link
              onClick={() => addItemFavourites(id)}
              className="box__button-star"
            >
              Agregar a favoritos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductListItem;
