import React, { useState } from "react";
import HistorialDePedidos from "./HistorialDePedidos";
import Favourite from "./Favourite";
import ProductosEnVenta from "./ProductosEnVenta";
import "./Profile.css";

function Profile({ user }) {
  const [showList, setShowList] = useState(<HistorialDePedidos />);

  return (
    <div className="profile-container">
      <div className="profile-container__image">
        <div className="profile-container__image__file">
          <img src={user && user.photo} alt={user && user.displayName} />
        </div>
        <div className="profile-container__image__text">
          <p> Welcome {user && user.name}!</p>
        </div>
      </div>
      <div className="profile-container__list">
        <div className="profile-container__list__nav">
          <a
            href="/profile"
            onClick={(event) => {
              event.preventDefault();
              setShowList(<HistorialDePedidos />);
            }}
          >
            <p>Historial de Pedidos</p>
          </a>
          <a
            href="/profile"
            onClick={(event) => {
              event.preventDefault();
              setShowList(
                <Favourite favouriteList={user && user.favourites} />
              );
            }}
          >
            <p>Lista de favoritos</p>
          </a>
          <a
            href="/profile"
            onClick={(event) => {
              event.preventDefault();
              setShowList(<ProductosEnVenta />);
            }}
          >
            <p>Productos en venta</p>
          </a>
        </div>
        <div className="profile-container__list__render">{showList}</div>
      </div>
    </div>
  );
}

export default Profile;
