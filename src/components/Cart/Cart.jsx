import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./cart.css";

const Cart = () => {
  const {
    cart,
    totalPrecio,
    deleteProductInCart,
    deleteCart,
    increaseQuantity,
    decreaseQuantity,
    formatCurrency,
  } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="conteinervacio">
        <h2>No hay productos en el carrtito, elija lo que más necesite</h2>
        <Link className="linkvacio" to="/">
          Volver al Inicio
        </Link>
      </div>
    );
  }

  return (
    <div>
      {cart.map((productCart) => (
        <div className="cartconteiner" key={productCart.id}>
          <img src={productCart.imagen} alt="producto" />
          <Link className="link" to={`/detalle/${productCart.id}`}>
            {productCart.nombre}
          </Link>
          <p className="cartdetalle">Precio C/U: {formatCurrency(productCart.precio)}</p>
          <p className="cartdetalle">Stock Disponible: {productCart.stock - productCart.cantidad}</p>
          <div className="botonera">
            <button className="boton"
              onClick={() => decreaseQuantity(productCart.id)}
              disabled={productCart.cantidad === 1}
            >
              -
            </button>
            <p className="cantidad">{productCart.cantidad}</p>
            <button className="boton"
              onClick={() => increaseQuantity(productCart.id)}
              disabled={productCart.cantidad == productCart.stock}
            >
              +
            </button>
          </div>
          <p className="cartdetalle">Precio parcial: {formatCurrency(productCart.precio * productCart.cantidad)} </p>
          <button onClick={() => deleteProductInCart(productCart.id)} className="eliminar">
            Borrar Producto
          </button>
        </div>
      ))}

      <div className="cartfinal">
        <p className="precio">Precio total: {formatCurrency(totalPrecio())}</p>
        <Link to="/checkout" className="finalizar">Terminar con la Orden de Compra</Link>
        <button onClick={deleteCart} className="vaciar">Vaciar carrito</button>
      </div>
    </div>
  );
};
export default Cart;
