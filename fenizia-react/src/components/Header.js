import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import TextInput from "./TextInput";

function Header() {
  const [productName, setProductName] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [genre, setGenre] = useState("");

  function handleClick() {
    setShowForm(true);
  }

  return (
    <>
      {/* {
    searchForm = showForm ? (
      <TextInput
      name="products"
      value={productName}
      placeholder="¿Qué quieres buscar?"
      onChange={(event) => onFieldChange(event.target.value, setProductName)}
    />

    ) : 'Meck!';
    } */}

      <section className="main-nav">
        <div className="hamburger">
          <Link to="/" className="icon__hamburger"></Link>
          <ul className="hamburger__products">
            <Link
              onclick={() => setGenre("cocina")}
              to="/cocina"
              className="novels"
            >
              Cocina
            </Link>
            <Link
              onclick={() => setGenre("ensayo")}
              to="/ensayo"
              className="childish"
            >
              Ensayo
            </Link>
            <Link
              onclick={() => setGenre("historia")}
              to="/historia"
              className="childish"
            >
              Historia
            </Link>
            <Link
              onclick={() => setGenre("infantil")}
              to="/infantil"
              className="childish"
            >
              Infantil
            </Link>
            <Link
              onclick={() => setGenre("romantico")}
              to="/romantico"
              className="childish"
            >
              Romántico
            </Link>
            <Link
              onclick={() => setGenre("thriller")}
              to="/thriller"
              className="childish"
            >
              Thriller
            </Link>
            <Link
              onclick={() => setGenre("todos")}
              to="/todos"
              className="childish"
            >
              TODOS
            </Link>
          </ul>
        </div>

        <Link to="/" className="icon__logo"></Link>

        <div className="main-nav-text">
          <Link to="/">INICIO</Link>
          <Link to="/sobre-nosotros">SOBRE NOSOTROS</Link>

          <div className="categories">
            <Link to="/productos">GÉNEROS</Link>
            <ul className="menu__products">
              <Link
                onclick={() => setGenre("cocina")}
                to="/cocina"
                className="novels"
              >
                Cocina
              </Link>
              <Link
                onclick={() => setGenre("ensayo")}
                to="/ensayo"
                className="childish"
              >
                Ensayo
              </Link>
              <Link
                onclick={() => setGenre("historia")}
                to="/historia"
                className="childish"
              >
                Historia
              </Link>
              <Link
                onclick={() => setGenre("infantil")}
                to="/infantil"
                className="childish"
              >
                Infantil
              </Link>
              <Link
                onclick={() => setGenre("romantico")}
                to="/romantico"
                className="childish"
              >
                Romántico
              </Link>
              <Link
                onclick={() => setGenre("thriller")}
                to="/thriller"
                className="childish"
              >
                Thriller
              </Link>
              <Link
                onclick={() => setGenre("todos")}
                to="/todos"
                className="childish"
              >
                TODOS
              </Link>
            </ul>
          </div>

          <a href="https://github.com/simonbesteiro/fenizia">CONTACTO</a>
          
        </div>

        {/* {searchForm} */}

        <Link to={handleClick} className="icon__search"></Link>

        <Link to="/login" className="icon__login"></Link>

      <Link to="/cart" className="icon__bag"></Link>
    </section>
    </>
  );
}

export default Header;
