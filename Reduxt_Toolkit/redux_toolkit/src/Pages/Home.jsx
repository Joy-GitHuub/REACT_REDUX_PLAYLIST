import React from 'react';
import '../style/home.css';
import { useDispatch, useSelector } from 'react-redux';
import { setCart, setProducts } from '../../redux/slice';
import Cart from './Cart';

const Home = () => {

    const products = useSelector((state) => state.shop.allProducts);
    const dispatch = useDispatch();


    const handleFetch = async () => {
        const url = `https://fakestoreapi.com/products`
        const res = await fetch(url);
        const data = await res.json();
        dispatch(setProducts(data));
    };
    React.useEffect(() => {
        handleFetch();
    } , []);

    const handleCartProduct = (product) => {
        dispatch(setCart(product));
    }
    return (
        <div>
            <h2 style={{textAlign: "center"}}>Shopping Site</h2>

            <div className="shop_container">
                <div className="products_container">
                {
                    products.map((product, i) => {
                    return <div key={i}>
                    <div className='singleProduct'>
                        <img src={product.image} alt="" />
                        <h4>{product.title}</h4>
                        <h5>Price: {product.price}</h5>
                        <button onClick={() => handleCartProduct(product)}>ADD To CART</button>
                    </div>
                    </div>})
                }
                </div>

                <div className="cart_container">
                    <Cart/>
                </div>
            </div>
        </div>
    );
};

export default Home;