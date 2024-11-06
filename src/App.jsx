import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './componentes/Header';
import Comentarios from './data/Comentarios'; // Importar comentarios por defecto
import ComentarioLista from './componentes/ComentarioLista';
import ComentarioStats from './componentes/ComentarioStats';
import ComentarioForm from './componentes/ComentarioForm';
import About from './pages/About';
import AboutIconLink from './componentes/AboutIconLink';
import { ComentariosProvider } from './contexto/ComentariosContexto';

function App() {
  const titulo = "App de Comentarios";
  const Autor = "Julian Ospina";
  const ficha = "2902093";
  const centro = "CGMLTI";

  return (
    <ComentariosProvider>
      <Router>
        <div className='container'>
          <Header titulo={titulo} autor={Autor} centro={centro} ficha={ficha} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <ComentarioForm />
                  <ComentarioStats />
                  <ComentarioLista />
                  <AboutIconLink />
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <About titulo={titulo} autor={Autor} ficha={ficha} />
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </ComentariosProvider>
  );
}

export default App;
