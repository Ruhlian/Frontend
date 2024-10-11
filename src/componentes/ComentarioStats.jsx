import React from 'react';

const ComentarioStats = ({ comentarios }) => {

  const totalComentarios = comentarios.length;

  const promedioCalificacion = comentarios.length > 0 
    ? (comentarios.reduce((acc, curr) => acc + curr.calificacion, 0) / totalComentarios).toFixed(1)
    : 0;
  return (
    <div className='feedback-stats'>
      <h4>Comentarios: {totalComentarios}</h4>
      {/*El numero de comentarios que hay en el arreglo de comentario */}
      <h4>Calificación promedio: {promedioCalificacion}</h4>
      {/* El promedio de calificaciones de los comentarios en el arreglo
      reduce js*/}
    </div>
  );
}

export default ComentarioStats;
