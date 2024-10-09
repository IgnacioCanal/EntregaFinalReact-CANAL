import CartWidget from "./CartWidget";
import logo from "../../assets/logovictornillo.png";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Victornillo Ferretería</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Inicio</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/listado">Listado de Productos</Link></li>
            <li className="nav-item"><a className="nav-link" href="#">Contacto</a></li>
            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorías</a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/categoria/herramientas">Herramientas</Link></li>
                <li><Link className="dropdown-item" to="/categoria/iluminacion">Iluminación</Link></li>
                <li><Link className="dropdown-item" to="/categoria/maquinaria">Maquinaria</Link></li>
                <li><Link className="dropdown-item" to="/categoria/clavosytornillos">Clavos y Tornillos</Link></li>
                <li><Link className="dropdown-item" to="/categoria/plomeria">Plomería</Link></li>
                <li><Link className="dropdown-item" to="/categoria/bazar">Bazar</Link></li>
              </ul>
            </li>
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;
