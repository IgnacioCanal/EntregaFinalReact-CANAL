import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { GrCart } from "react-icons/gr";
import { Link } from "react-router-dom";
const CartWidget = () => {
  const {totalProducts} = useContext(CartContext)

  return (
    <Link to="/cart" className="cartwidget">
      <GrCart className="carticon"/>
      <p className="numero-cartwidget">{totalProducts()}</p>
    </Link>
  )
}

export default CartWidget
