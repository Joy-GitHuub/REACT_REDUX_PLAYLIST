import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFormCart } from '../Service/Action/productAction';

const Cart = () => {
    const cart = useSelector((state) => state.shop.cart);
    const totalPrice = useSelector((state) => state.shop.totalPrice);
    const dispatch = useDispatch();

    const handleRemove = (productId) => {
        dispatch(removeFormCart(productId))
    }
    return (
        <div>
            <h2>CART</h2>
            {cart.length ?
            <div>
                {
                    cart.map((product, i) => {
                        return <div key={i} style={{display: 'flex', alignItems: "center",}}>
                            <img style={{width: "50px", height: "50px"}} src={product.image} alt="" />
                            <span style={{fontSize: "11px"}}>{product.title}</span>
                            <span style={{fontSize: '10px', fontWeight: "bold", marginLeft: "3px"}}>{product.price} * {product.quantity}</span>
                            <button onClick={()=> handleRemove(product.id)}>X</button>
                        </div>
                    } )
                }
                <h6>Total Price {totalPrice}</h6>
            </div>:
            <div>
                
            </div>
            }
        </div>
    );
};

export default Cart;