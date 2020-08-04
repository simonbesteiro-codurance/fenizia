import React, { useEffect, useState } from "react";
import HistorialDePedidos from "./HistorialDePedidos";
import ListaDeFavoritos from "./ListaDeFavoritos";
import ProductosEnVenta from "./ProductosEnVenta";

import "./Profile.css";

function Profile() {
  const [showList, setShowList] = useState(<HistorialDePedidos />);

  return (
    <div className="profile-container">
      <div className="profile-container__image">
        <img
          src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png"
          alt="profile image"
        />
      </div>
      <div className="profile-container__list">
        <div className="profile-container__list__nav">
          <a
            onClick={(event) => {
              event.preventDefault();
              setShowList(<HistorialDePedidos />);
            }}
          >
            <p>Historial de Pedidos</p>
          </a>
          <a
            onClick={(event) => {
              event.preventDefault();
              setShowList(<ListaDeFavoritos />);
            }}
          >
            <p>Lista de favoritos</p>
          </a>
          <a
            onClick={(event) => {
              event.preventDefault();
              setShowList(<ProductosEnVenta />);
            }}
          >
            <p>Prductos en venta</p>
          </a>
        </div>
        <div className="profile-container__list__render">{showList}</div>
      </div>
    </div>
  );
}

export default Profile;
