import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import TextInput from "./TextInput";

function Header() {
  const [productName, setProductName] = useState('');
  const [showForm, setShowForm] = useState(false);

  function onFieldChange(value, setValue) {
    setValue(value);
  }

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
          <Link to="/" className="novels">Novelas</Link>
          <Link to="/" className="childish">Infantil</Link>        
        </ul>
      </div>

      <Link to="/" className="icon__logo"></Link>

      <div className="main-nav-text">
        <Link to="/">INICIO</Link>
        <Link to="/sobre-nosotros">SOBRE NOSOTROS</Link>
        
        <div className="categories">
          <Link to="/productos">CATEGORÍAS</Link>
          <ul className="menu__products">
            <Link to="/" className="novels">Novelas</Link>
            <Link to="/" className="childish">Infantil</Link>  
          </ul>
        </div>
       
        <Link to="/contacto">CONTACTO</Link>
      </div>

        {/* {searchForm} */}
     
      <Link to={handleClick} className="icon__search"></Link>

      <Link to="/profile" className="icon__login"></Link>

      <Link to="/" className="icon__bag"></Link>
    </section>
    </>
  );
}

export default Header;
