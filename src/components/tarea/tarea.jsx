import React, { useContext } from 'react';
import { TareasContext } from '../../TareasContext';
import './tarea.css';

const Tarea = ({ tarea, index }) => {
    const [tareas, setTareas] = useContext(TareasContext);

    const completarTarea = () => {
        const nuevasTareas = [...tareas];
        nuevasTareas[index].fueCompletada = !nuevasTareas[index].fueCompletada;
        nuevasTareas[index].fechaCompletada = new Date(Date.now())
        setTareas(nuevasTareas);
    };

    const borrarTarea = (e) => {
        e.stopPropagation();
        const nuevasTareas = [...tareas];
        nuevasTareas.splice(index, 1);
        setTareas(nuevasTareas);
    };

    return (
        <li className={tarea.fueCompletada ? 'completada' : ''} onClick={completarTarea}>
            {tarea.nombre}
            <button onClick={borrarTarea} className='btnBorrar'>Borrar</button>
        </li>
    );
};

export default Tarea;