import React from 'react'
import { Link } from 'react-router-dom';
import "./NewsList.css"


const NewsList = ({ title, author, price, cover, description }) => (
    <div className="main-box">
        <img className="box__image" src={cover} />
        <h3 className="box__title">{title}</h3>
        <p className="box__author">{author}</p>
        <p className="box__description">{description}</p>
        <p className="box__price">Precio:</p>
        <Link to="/" className="box__button">Comprar</Link>
        
    </div>     
)


export default NewsList;