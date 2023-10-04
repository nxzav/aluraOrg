import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario'
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import { useState } from 'react';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false);

  // Ternario --> condición ? seMuestra : noSeMuestra
  // condición && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  }

  return (
    <div className="App">
      <Header />
      {/* {mostrarFormulario ? <Formulario /> : <></>} */}
      {mostrarFormulario && <Formulario/>}
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      <Equipo />
    </div>
  );
}

export default App;