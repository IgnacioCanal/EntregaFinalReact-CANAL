import CartWidget from "./CartWidget";
import logo from "../../assets/logovictornillo.png";
import "./navbar.scss";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Victornillo Ferretería</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Inicio</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Listado de Productos</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Contacto</a></li>
            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorías</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Herramientas</a></li>
                <li><a className="dropdown-item" href="#">Iluminación</a></li>
                <li><a className="dropdown-item" href="#">Maquinaria</a></li>
                <li><a className="dropdown-item" href="#">Clavos y Tornillos</a></li>
                <li><a className="dropdown-item" href="#">Baño</a></li>
                <li><a className="dropdown-item" href="#">Bazar</a></li>
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
