import { useContext } from "react";
import TareasContext from '../../TareasContext';
import InputTarea from '../inputTarea/inputTarea';
import BtnAgregar from "../btnAgregar/btnAgregar";
import BtnRapidez from "../btnRapidez/btnRapidez";
import Tarea from "../../models/Tarea";

const Formulario = () => {
    const { tareas, setTareas } = useContext(TareasContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!e.target.textBox.value) return;
        const tarea = new Tarea(e.target.textBox.value);
        if (tareas.length === 0) {
            setTareas([tarea]);
        } else {
            setTareas([...tareas, tarea]);
        }
        e.target.reset();
    }
    return (
        <form onSubmit={handleSubmit}>
            <InputTarea />
            <BtnAgregar />
            <BtnRapidez />
        </form>
    )
}

export default Formulario;