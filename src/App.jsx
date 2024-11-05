import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { CartContextProvider } from "./context/CartContext";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import "react-toastify/dist/ReactToastify.css";
function App() {
  
  return (
    <CartContextProvider>
      <div className="container-total">
        <Router>
          <Navbar />
          <ToastContainer theme="dark" />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/categoria/:idCategoria"
              element={<ItemListContainer />}
            />
            <Route
              path="/detalle/:idProducto"
              element={<ItemDetailContainer />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Router>
      </div>
    </CartContextProvider>
  );
}

export default App;
