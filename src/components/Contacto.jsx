import { useForm } from "react-hook-form";
import React from 'react';

const Contacto = () => {

    const { register, handleSubmit } = useForm();

    const enviar = (data) => {
        console.log(data);
    }

  return (

    <div className="containerContacto">
        <h1 className="main-title">Contacto</h1>
        <p className="carritoH2">Tenemos lo que necesitas, contactanos!</p>
        <form className="formulario" onSubmit={handleSubmit(enviar)}>

            <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
            <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
            <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />

            <button className="enviar" type="submit">Enviar</button>

        </form>
    </div>

  )
}

export default Contacto