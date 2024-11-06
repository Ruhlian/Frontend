import React, { createContext, useState, useEffect } from 'react';
import Comentarios from '../data/Comentarios'; // Asegúrate de que esto sea correcto

export const ComentariosContexto = createContext();

export const ComentariosProvider = ({ children }) => {
  const [comentarios, setComentarios] = useState(Comentarios);

  const addComentario = (newComentario) => {
    setComentarios((prev) => [
      ...prev,
      { ...newComentario, id: prev.length + 1 }, // Asignar un nuevo ID
    ]);
  };

  const borrarComentario = (id) => {
    setComentarios((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <ComentariosContexto.Provider value={{ comentarios, addComentario, borrarComentario }}>
      {children}
    </ComentariosContexto.Provider>
  );
};
