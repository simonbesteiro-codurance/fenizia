import React, { useState } from "react";
import HistorialDePedidos from "./HistorialDePedidos";
import ListaDeFavoritos from "./ListaDeFavoritos";
import ProductosEnVenta from "./ProductosEnVenta";
import authStore from "../stores/authStore";
import {} from "../user.mock";
import userList from "../user.mock";
import "./Profile.css";

function Profile() {
  const [showList, setShowList] = useState(<HistorialDePedidos />);
  const [user, setUser] = useState(authStore.getUserProfile());
  let loadedUser = 11;

  //Es asincrono? se muestra 3 veces
  console.log(user);
  return (
    <div className="profile-container">
      <div className="profile-container__image">
        <div className="profile-container__image__file">
          <img
            src={
              !!user.photoURL
                ? user.photoURL
                : "https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png"
            }
            alt={user.displayName}
          />
        </div>
        <div className="profile-container__image__text">
          <p>{user.displayName}</p>
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
