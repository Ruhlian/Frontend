import React from 'react';
import Card from './Card';
import { FaTimes } from 'react-icons/fa';

const ComentarioItem = ({ comentario, calificacion, id, handleDelete }) => {
  return (
    <Card reverse={true}>
      <div className='num-display'>{calificacion}</div>
      <button onClick={() => handleDelete(id)} className='close'>
        <FaTimes color='purple' />
      </button>
      <div className='text-display'>{comentario}</div>
    </Card>
  );
};

export default ComentarioItem;
