import React from 'react';
import Card from '../componentes/Card';
import HomeIcon from '../componentes/HomeIcon'; // Importar el componente HomeIcon

const About = ({ titulo, autor, ficha, centro }) => {
  return (
    <Card>
      <div className='about'>
        <h1>Acerca de este proyecto</h1>
        <h3>Esta es una app en React</h3>
        <p><b>Título:</b> {titulo}</p>
        <p><b>Autor:</b> {autor}</p>
        <p><b>Ficha:</b> {ficha}</p>
        <p><b>Centro:</b> {centro}</p>
        <p><b>Versión:</b> 1.0.0</p>
        <p>
          <HomeIcon /> {/* Aquí se incluye el ícono de Home */}
          <a href='/'>Volver a Página Principal</a>
        </p>
      </div>
    </Card>
  );
}

export default About;
