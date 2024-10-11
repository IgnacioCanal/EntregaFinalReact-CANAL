import CartWidget from "./CartWidget";
import logo from "../../../public/img/logovictornillo.png";
import { Link , NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><img src={logo} alt="Logo" /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Inicio</Link></li>
            <li className="nav-item"><Link className="nav-link" to="*">Contacto</Link></li>
            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorías</a>
              <ul className="dropdown-menu">
                <li><NavLink className={({isActive})=> (isActive ? "active-link" : "" ) + " dropdown-item"} to="/categoria/herramientas">Herramientas</NavLink></li>
                <li><NavLink className={({isActive})=> (isActive ? "active-link" : "" ) + " dropdown-item"} to="/categoria/iluminacion">Iluminación</NavLink></li>
                <li><NavLink className={({isActive})=> (isActive ? "active-link" : "" ) + " dropdown-item"} to="/categoria/maquinas">Maquinas</NavLink></li>
                <li><NavLink className={({isActive})=> (isActive ? "active-link" : "" ) + " dropdown-item"} to="/categoria/clavosytornillos">Clavos y Tornillos</NavLink></li>
                <li><NavLink className={({isActive})=> (isActive ? "active-link" : "" ) + " dropdown-item"} to="/categoria/plomeria">Plomería</NavLink></li>
                <li><NavLink className={({isActive})=> (isActive ? "active-link" : "" ) + " dropdown-item"} to="/categoria/bazar">Bazar</NavLink></li>
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
