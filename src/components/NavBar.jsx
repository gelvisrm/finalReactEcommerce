import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/" className="logo"><img src="src/assets/logo.png" alt="logo" /></Link>
        <ul className="menu">
            <li><Link className="menu-link" to="/">Inicio</Link></li>
            <li><Link className="menu-link" to="/productos">Productos</Link></li>
            <li><Link className="menu-link" to="/productos/celulares">Celulares</Link></li>
            <li><Link className="menu-link" to="/productos/electronica">Electronica</Link></li>
            <li><Link className="menu-link" to="/productos/accesorios">Accesorios</Link></li>
            <li><Link className="menu-link" to="/productos/videojuegos">Video-Juegos</Link></li>
            <li><Link className="menu-link" to="/nosotros">Nosotros</Link></li>
            <li><Link className="menu-link" to="/contacto">Contacto</Link></li>
            <li><CartWidget /></li>
        </ul>
    </nav>
  )
}

export default Navbar