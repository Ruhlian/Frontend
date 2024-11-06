import React, { useContext } from 'react';
import { ComentariosContexto } from '../contexto/ComentariosContexto';
import ComentarioItem from './ComentarioItem';
import { AnimatePresence, motion } from 'framer-motion';

const ComentarioLista = () => {
  const { comentarios, borrarComentario } = useContext(ComentariosContexto);

  if (!comentarios || comentarios.length === 0) {
    return <p>No hay comentarios</p>;
  }

  return (
    <div className='comments'>
      <ul>
        <AnimatePresence>
          {comentarios.map((comentario) => (
            <motion.div
              key={comentario.id}
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ComentarioItem
                comentario={comentario.comentario}
                calificacion={comentario.calificacion}
                id={comentario.id}
                handleDelete={borrarComentario}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default ComentarioLista;
