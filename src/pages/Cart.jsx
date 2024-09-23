import { useContext } from "react";
//import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem/CartItem";

const Cart = () => {
    const { cartItems, totalAmount } = useContext(CartContext);

    return (
        <div>
            <h2>Carrito de Compras</h2>
            {cartItems.length === 0 ? (
                <p>El carrito está vacío</p>
            ) : (
                <div>
                    {cartItems.map(item => (
                        <CartItem key={item.id} item={item} />
                    ))}
                    <h3>Total: ${totalAmount}</h3>
                    <button>Proceder al pago</button>
                </div>
            )}
        </div>
    );
};

export default Cart;