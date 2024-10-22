import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { GrCart } from "react-icons/gr";
import { Link } from "react-router-dom";
const CartWidget = () => {
  const {totalProducts} = useContext(CartContext)

  const total = totalProducts()

  return (
    <Link to="/cart" className="cartwidget">
      <GrCart className="carticon"/>
      <p className="numero-cartwidget">{total >= 1 && total}</p>
    </Link>
  )
}

export default CartWidget
