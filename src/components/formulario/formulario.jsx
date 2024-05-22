import React, { useState, useContext } from 'react';
import { TareasContext } from '../../TareasContext';
import InputTarea from '../inputTarea/inputTarea';
import BtnAgregar from "../btnAgregar/btnAgregar";
import BtnRapidez from "../btnRapidez/btnRapidez";
import Tarea from "../../models/Tarea";

const Formulario = () => {
    const [ tareas, setTareas ] = useContext(TareasContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!e.target.textBox.value) return;
        const tarea = new Tarea(e.target.textBox.value);
        setTareas([...tareas, tarea]);
        e.target.textBox.value = '';
    }

    const handleRapidez = (e) => {
        e.preventDefault();
        const tareasCompletadas = tareas.filter(tarea => tarea.fueCompletada);
        if (tareasCompletadas.length === 0) alert('No hay tareas completadas');
        else {
            const tareaMasRapida = tareasCompletadas.reduce((tareaMasRapida, tareaActual) => {
                return (tareaMasRapida.fechaCompletada - tareaMasRapida.fechaCreacion < tareaActual.fechaCompletada - tareaActual.fechaCreacion) ? tareaMasRapida : tareaActual
            });
            alert(`La tarea más rápida es: ${tareaMasRapida.nombre}`);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <InputTarea />
            <BtnAgregar />
            <BtnRapidez onClick={handleRapidez}/>
        </form>
    )
}

export default Formulario;