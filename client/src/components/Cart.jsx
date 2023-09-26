import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import "./Cart.css";
import { FaRedoAlt, FaShoppingBasket, FaTrash } from "react-icons/fa";
import { removeFromCart, reset } from "../redux/cartReducer";

function Cart() {
    const [cartList, setCartList] = useState(false)
    const dispatch = useDispatch();
    const showList = () => {
        cartList ? setCartList(false) : setCartList(true)
    }

    const products = useSelector(state => state.cart.products)

    return (
        <>
            <div className="cart">
                <div className="cart-icon" onClick={() => products.length > 0 && showList()}>
                    <FaShoppingBasket />
                </div>
                <div className="cart-badge">{products.length}</div>
                {
                    cartList || products.length > 0 ? (
                        <ul className="cart-list" >
                            {
                                products.map(product =>
                                    <li className="cart-item" key={product.id}>
                                        <img src={import.meta.env.VITE_APP_URL + product.image} alt="" className="cart-item-image" />
                                        <span className="cart-item-title">{product.title}</span>
                                        <span className="cart-item-price">{product.price}</span>
                                        <span className="cart-item-remove" onClick={() => dispatch(removeFromCart({
                                            id: product.id
                                        }))}><FaTrash /></span>
                                    </li>
                                )
                            }
                            <span className="reset" onClick={() => dispatch(reset())}><FaRedoAlt /></span>
                        </ul>

                    ) : ('')
                }
            </div >
        </>
    );
}
export default Cart;
