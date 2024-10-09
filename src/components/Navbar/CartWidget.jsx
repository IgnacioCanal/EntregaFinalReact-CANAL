import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { GrCart } from "react-icons/gr";
const CartWidget = () => {
  const {items} = useContext(CartContext);
  const totalItems = items.reduce((acc, item) => acc + item.cantidad, 0)
  return (
    <div className="cartwidget">
      <span className="carticon">🛒</span>
      {totalItems > 0 && <span className="itemcount">{totalItems}</span>}
    </div>
  )
}

export default CartWidget
