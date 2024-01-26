import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext';

const CartWidget = () => {

    const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <div>
        <Link className="menu-link" to="/carrito">
          <div className='cartDiv'>
          <img  className="cardIcon" src="src/assets/carrito-de-compras.png" alt="Carrito de Compras" /> 
            <span className="numerito">{cantidadEnCarrito()}</span>
          </div>
        </Link>
    </div>
  )
}

export default CartWidget