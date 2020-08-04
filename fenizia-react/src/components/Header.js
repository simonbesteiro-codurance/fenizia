import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import TextInput from './TextInput';



function Header() {
    const [productName, setProductName] = useState('');

    function onFieldChange(value, setValue) {
		setValue(value);
	}  

    return (
        <section className="main-nav">
            <Link to="/" className="icon__hamburger"></Link>

            <Link to="/" className="icon__logo"></Link> 

            <div className="main-nav-text">
                <Link to="/">INICIO</Link>
                <Link to="/sobre-nosotros">SOBRE NOSOTROS</Link>
                <Link to="/productos">CATEGORÍAS</Link>
                <Link to="/contacto">CONTACTO</Link>
            </div>

            <TextInput 
				name="products"
				value={productName}
				placeholder="¿Qué quieres buscar?"
				onChange={(event) => onFieldChange(event.target.value, setProductName)}
			/>

            <Link to="/" className="icon__search"></Link>
            

            <Link to="/" className="icon__login"></Link>

            <Link to="/" className="icon__bag"></Link>
        </section>    
    )
}

export default Header;
