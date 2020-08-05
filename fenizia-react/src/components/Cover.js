import React from 'react'
import './Cover.css'

function Cover () {
    return (
        
        <div className='img__cover'>
            <img src={require('../img/img-cover.jpg')} alt=""/>
            <p className='img__title'>Leer nos hace libres</p>
        </div>
    )
}   

export default Cover;