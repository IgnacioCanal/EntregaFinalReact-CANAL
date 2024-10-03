import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainerWithHoc from "./components/ItemListContainer/ItemListContainer";
import { CartProvider } from "./context/CartContext";
function App() {
  return (
    <div>
      <Navbar/>
      <CartProvider>
        <ItemListContainerWithHoc />
      </CartProvider>
      
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<ProductList />} />
          <Route path="/productos/:id" element={<ProductDetail />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    
    
    
    </div>
  );
}

export default App;