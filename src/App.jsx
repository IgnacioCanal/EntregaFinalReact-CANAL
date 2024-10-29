import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainerWithHoc from "./components/ItemListContainer/ItemListContainer";
import { CartContextProvider } from "./context/CartContext";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
function App() {
  return (
    <CartContextProvider>
      <div className="container-total">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainerWithHoc />} />
            <Route path="/categoria/:idCategoria" element={<ItemListContainerWithHoc/>}/>
            <Route path="/detalle/:idProducto" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/checkout" element={<Checkout/>} />
          </Routes>
        </Router>
      </div>
    </CartContextProvider>
  );
}

export default App;
