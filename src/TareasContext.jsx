import React, { createContext, useState } from 'react';

export const TareasContext = createContext([]);

export const TareasProvider = (props) => {
    const [tareas, setTareas] = useState([]);

    return (
        <TareasContext.Provider value={[tareas, setTareas]}>
            {props.children}
        </TareasContext.Provider>
    );
};