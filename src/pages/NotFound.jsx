import { Link } from "react-router-dom";
import "./notfound.css";
import logo from "../../public/img/logovictornillo.png";
const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404 - Página no encontrada</h1>
      <p className="not-found-message">Lo sentimos, la página que estás buscando no existe.</p>
      <img src={logo} alt="Not Found" className="not-found-image" />
      <Link to="/" className="not-found-link">Volver a la página principal</Link>
    </div>
  );
};

export default NotFound;
