import React, { useEffect, useState } from "react";
import { loadProducts } from "../actions/productActions";
import productStore from "../stores/productStore";
import genreStore from "../stores/genreStore";
import ProductListItem from "./ProductListItem";
import "./ProductList.css";

function ProductList(props) {
  const [genre, setGenre] = useState(null);
  const [products, setProducts] = useState(
    productStore.getProductByGenre(genre)
  );

  useEffect(() => {
    const genre = props.match.params.genre;
    setProducts(productStore.getProductByGenre(genre));
    productStore.addChangeListener(onChange);
    if (products.length === 0) loadProducts();
    return () => productStore.removeChangeListener(onChange);
  }, [products.length, props.match.params.genre]);

    useEffect(() => {
        productStore.addChangeListener(onChange);
        if (products.length === 0) loadProducts();
        return () => productStore.removeChangeListener(onChange);
      }, [products.length]);
    
      function onChange() {
        setProducts(productStore.getProductByGenre(genre));
        setGenre(genreStore.getGenre());
      }
        
    
      return (
            <>
            <div className="ProductList__Title">{props.match.params.genre.toUpperCase()}</div>
                {products.map((product) => (
                    <ProductListItem 
                        key={product.id}
                        id={product.id}
                        title={product.product.title}
                        author={product.product.author}
                        price={product.product.price}
                        cover={product.product.cover}
                        description={product.product.description}
                    />
                ))}
            </>
        );
    }

  


export default ProductList;
