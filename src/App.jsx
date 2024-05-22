import { useState } from 'react'
import './App.css'
import TareasContext from './TareasContext';

import Formulario from './components/formulario/formulario'
import ListaTareas from './components/listaTareas/listaTareas';

function App() {
  const [tareas, setTareas] = useState([]);
  return (
    <TareasContext.Provider value={{tareas, setTareas}}>
      <Formulario />
      <ListaTareas />

    </TareasContext.Provider>
  )
}

export default App
