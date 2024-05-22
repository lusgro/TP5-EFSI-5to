import { useContext } from 'react';
import './btnBorrar.css';
import TareasContext from '../../TareasContext';

const BtnBorrar = (props) => {
    const { tareas, setTareas } = useContext(TareasContext)
    newTareas = tareas.filter((tarea) => tarea.nombre !== props.nombre && tarea.fechaCreacion !== props.fechaCreacion)
    setTareas(newTareas)
}

export default BtnBorrar;