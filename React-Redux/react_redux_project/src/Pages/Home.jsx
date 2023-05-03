import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, setProducts } from '../Service/Action/productAction';
import '../styles/home.css'
import Cart from './Cart';

const Home = () => {

    const products = useSelector((state) => state.shop.allProducts);
    const dispatch = useDispatch();

    const handleFetchData = async()=> {
        const url = `https://fakestoreapi.com/products`
        const res = await fetch(url);
        const data = await res.json();
        dispatch(setProducts(data))
    };
    React.useEffect(()=> {
        handleFetchData();
    }, []);


    const handleCart = (product) => {
        dispatch(addToCart(product));
    };

    return (
        <div className='full_page'>
            <div className='allProductContainer'>
                {
                    products.map((product, i) => {
                    return <div key={i}>
                    <div className='singleProduct'>
                        <img src={product.image} alt="" />
                        <h4>{product.title}</h4>
                        <h5>Price: {product.price}</h5>
                        <button onClick={() => handleCart(product)}>ADD To CART</button>
                    </div>
                    </div>})
                }
            </div>

            <div>
               <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;