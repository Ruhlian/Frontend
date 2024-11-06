import React, { useContext, useState } from 'react';
import { ComentariosContexto } from '../contexto/ComentariosContexto';
import Card from './Card';
import ComentarioCalificacion from './ComentarioCalificacion';

const ComentarioForm = () => {
  const { addComentario } = useContext(ComentariosContexto);
  const [text, setText] = useState('');
  const [calificacion, setCalificacion] = useState(0);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 0) {
      addComentario({ comentario: text, calificacion });
      setText('');
      setCalificacion(0); // Resetear calificación
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <ComentarioCalificacion select={(calificacion) => setCalificacion(calificacion)} />
        <div className='input-group'>
          <input
            type='text'
            value={text}
            onChange={handleTextChange}
            placeholder='Ingrese su comentario'
          />
          <button type='submit'>Guardar</button>
        </div>
      </form>
    </Card>
  );
};

export default ComentarioForm;
