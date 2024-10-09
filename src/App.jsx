import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainerWithHoc from "./components/ItemListContainer/ItemListContainer";
import { CartContextProvider } from "./context/CartContext";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
function App() {
  return (
    <CartContextProvider>
      <div className="container">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainerWithHoc />} />
            <Route path="/listado" element={<ItemListContainerWithHoc />} />
            <Route path="/categoria/:idcategoria" element={<ItemListContainerWithHoc/>}/>
            <Route path="/detalle/:idProducto" element={<ItemDetailContainer/>}/>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </CartContextProvider>
  );
}

export default App;
