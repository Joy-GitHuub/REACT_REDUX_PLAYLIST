import { useDispatch, useSelector } from 'react-redux';
import { removeToCart } from '../../redux/slice';

const Cart = () => {
    const cart = useSelector((state) => state.shop.cart);
    const totalPrice = useSelector((state) => state.shop.totalPrice);
    const dispatch = useDispatch();
    const handleRemoveProduct = (productId) => {
        dispatch(removeToCart(productId));
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
                        <button onClick={() => handleRemoveProduct(product.id)}>X</button>
                    </div>
                } )
            }
            <h6>Total Price {totalPrice.toFixed(2)}</h6>
        </div>:
        <div>
            
        </div>
        }
    </div>
    );
};

export default Cart;