import { useContext } from 'react';
import './listaTareas.css';

const ListaTareas = () => {
    var className
    const { tareas, setTareas } = useContext(TareasContext);
    return (
        tareas.map((tarea, index) => {
            className = ''
            if (tarea.fueCompletada) {
                className = 'completada'
            }
            <div>
                <li className={className}>{tarea.nombre}</li>
                
            </div>


}

export default ListaTareas;