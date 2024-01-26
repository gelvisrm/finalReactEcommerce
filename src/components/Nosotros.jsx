import React, { useEffect } from 'react'


const Nosotros = () => {

  useEffect(() => {

    const clickear = () => {
      console.log("Click");
    }

    window.addEventListener("click", clickear)

    return () => {
      window.removeEventListener("click", clickear)
    }

  }, [])

  return (
    <div className="container">
        <h1 className="main-title">Nosotros</h1>
        <img src="https://img.freepik.com/foto-gratis/armario-digital-pantalla-transparente_53876-105380.jpg?w=1800&t=st=1706227176~exp=1706227776~hmac=eee4372496e7fe7b40413961c04272561f43894b3c60d4aeecdcdd80a90a3217" alt="tecnologia" />
        <p className='nosotrosP'>¡Bienvenido a Tecnoshop, tu destino definitivo para la última tecnología y dispositivos innovadores! En Tecnoshop, nos enorgullecemos de ofrecerte una amplia gama de productos tecnológicos de primera calidad, cuidadosamente seleccionados para satisfacer tus necesidades y superar tus expectativas.

Desde smartphones y laptops hasta dispositivos inteligentes para el hogar y accesorios de vanguardia, en Tecnoshop encontrarás todo lo que necesitas para mantenerte conectado, productivo y entretenido en el mundo digital de hoy.</p>
    </div>
  )
}

export default Nosotros