import React from 'react'
import './CartList.css'
import { Link } from 'react-router-dom'




function CartList({ title, author, price, cover, amount }) {
    return (
        <>
        <div className="main-box-cart">
            <img className="box__image box__image--small" src={cover} alt="Book" />
                <div className="box__text">
                    <h3 className="box__title">{title}</h3>
                    <p className="box__author">{author}</p>
                </div>
                <p className="flex-grow-right"></p>
                <p className="box__price--amount">{amount}</p>
                <p className="flex-grow-left"></p>
                <p className="box__price--price">{price}<span>€</span></p>
                <p className="flex-grow-left"></p>
                <p className="box__price--total">{price * amount}<span>€</span></p>
        </div>  
        <Link className="trash"></Link>
        </>
    )
}

export default CartList;