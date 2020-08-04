import React from 'react'
import { Link } from 'react-router-dom';
import "./NewsList.css"


const NewsList = ({ title, author, price, cover, description }) => (
    <div className="main-box">
        <img className="box__image" src={cover} />
        <div className="box__contain">
            <div className="box__text">
                <h3 className="box__title">{title}</h3>
                <p className="box__author">{author}</p>
                <p className="box__sinopsis">Sinopsis</p>
                <p className="box__description">{description}</p>
            </div>
            <div className="box__button">
                <p className="box__number-price">{price}<span>€</span></p>
                <p className="box__vat">IVA INCLUÍDO</p>
                <Link to="/" className="box__button-cart">Agregar a la cesta</Link>
                <Link to="/" className="box__button-star">Agregar a favoritos</Link>
            </div>
        </div>
    </div>     
)


export default NewsList;