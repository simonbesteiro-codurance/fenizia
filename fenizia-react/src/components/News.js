import React, { useEffect, useState } from 'react';
import { loadProducts } from "../actions/productActions";
import productStore from '../stores/productStore';
import NewsList from './NewsList'


function News() {
    const [products, setProducts] = useState(productStore.getProduct());

    useEffect(() => {
        productStore.addChangeListener(onChange);
        if (products.length === 0) loadProducts();
        return () => productStore.removeChangeListener(onChange);
      }, [products.length]);
    
      function onChange() {
        setProducts(productStore.getProduct());
      }
        
    
      return (
            <>
                {products.map((product) => (
                    <NewsList 
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

export default News;