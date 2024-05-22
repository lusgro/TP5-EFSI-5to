import React, { useContext } from 'react';
import './listaTareas.css';
import Tarea from '../tarea/tarea';
import { TareasContext } from '../../TareasContext';

const ListaTareas = () => {
    const [tareas] = useContext(TareasContext);

    return tareas.map((tarea, index) => (
        <Tarea key={index} index={index} tarea={tarea} />
    ));
};

export default ListaTareas;