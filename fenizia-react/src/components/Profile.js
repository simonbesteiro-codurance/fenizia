import React, { useState } from "react";
import HistorialDePedidos from "./HistorialDePedidos";
import ListaDeFavoritos from "./ListaDeFavoritos";
import ProductosEnVenta from "./ProductosEnVenta";
import {} from "../user.mock";
import userList from "../user.mock";
import "./Profile.css";

function Profile() {
  const [showList, setShowList] = useState(<HistorialDePedidos />);
  let loadedUser = 11;
  return (
    <div className="profile-container">
      <div className="profile-container__image">
        <div className="profile-container__image__file">
          <img
            src={userList[loadedUser].photo}
            alt={userList[loadedUser].name}
          />
        </div>
        <div className="profile-container__image__text">
          <p>{userList[loadedUser].name}</p>
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
              setShowList(<ListaDeFavoritos />);
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
