import './App.css'
import { TareasProvider } from './TareasContext';
import Formulario from './components/formulario/formulario'
import ListaTareas from './components/listaTareas/listaTareas';

function App() {
  return (
    <TareasProvider>
      <Formulario />
      <ListaTareas />
    </TareasProvider>
  )
}

export default App
