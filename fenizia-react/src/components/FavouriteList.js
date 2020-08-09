import React, { useState } from'react'
import productStore from '../stores/productStore'

function FavouriteList({id}) {
    const[product,setProduct]=useState(productStore.getProductById({id}))
     console.log({product})
    return <p>{product.product.title}</p>;
  }
  
  export default FavouriteList;