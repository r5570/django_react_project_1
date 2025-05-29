import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Let's import the ProductCard we built in components
import ProductCard from '../components/ProductCard';

const Home = () => {

    // creating an array of fake products for testing the design.
    // This section will be replaced with logic for fetching the JSON response of products from API
    // and generating an array of products of the same structure.

    // const fakeProducts = [
    //     {id: 1, name: 'Iphone', price : 1000},
    //     {id: 2, name: 'S23', price: 20},
    //     {id: 3, name: 'Vivo', price: 10},
    //     {id: 4, name: 'Redmi', price: 5}
    // ];
    
    // The Home page(component) should maintain an array of product objects.
    // the useState hook => returns an array of initialized variable and a function to set/update it's value
    // =>variable, function
    const [products, setProducts] = useState([]);
    
    // pure function
    useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/products/').then((response) => {
            // store the response
            setProducts(response.data);
            // console.log(products);
        })
        .catch((error) => {
            console.error('Error fetching products: ', error);
        });
    }
        ,[]);
    
    return (
        <div className='container mt-5 w-100 mx-auto bg-secondary'>
            <h1>
                Products
            </h1>
            <div className='row w-100'>
                {products.map((product) => (
                    // console.log(product);
                    <ProductCard key={product.id} product = {product} />
                ))}
            </div>
        </div>
    );


};


export default Home;