import React from 'react'
import './Tarea11.css'
import { useState } from 'react';

const Tarea11 = () => {

  const [color, setColor] = useState('rgb(0, 0, 0)');

  const colorRGB = (numero) => {

    const generarNumero = (numero) => {
    return (Math.random()*numero).toFixed(0);
    }
  let coolor = '('+generarNumero(numero)+', '+generarNumero(numero)+', '+generarNumero(numero)+')';
  return 'rgb' + coolor
  }

  const handleMouse = (e) =>{
    setColor(colorRGB(255))
  }


  const handleSalida = () => {
    setColor(colorRGB(0)) 
  }

  
  return (
    <div className='padre'>
      <div className='contenedor' onMouseOver={handleMouse} onMouseOut = {handleSalida}
        style={{
      backgroundColor: color
      }}
      ></div>
    </div>
  )
}

export default Tarea11
