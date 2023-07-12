import React from "react";

import { useState, useContext  } from "react";

import { TaskContext } from "../context/TaskContext";

function TaskForm(){

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const { createTask } = useContext(TaskContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        createTask({
            title:title, 
            description:description
        });


        setTitle("");
        setDescription("");
    }
    return (
        <div className="max-w-md mx-auto">
            <form className="bg-slate-800 p-10 mb-4" onSubmit={handleSubmit}>
                <h1 className="text-2xl mb-4 text-white">Crea tu tarea</h1>
                <input  className="bg-slate-300 p-3 w-full mb-2 rounded-md"
                placeholder="Escribe tu tarea"
                onChange={(e) => {setTitle(e.target.value)}}
                value={title}
                autoFocus
                />
                <textarea  className="bg-slate-300 p-3 w-full mb-2 rounded-md"
                placeholder="Escribe descripcion"
                onChange={(e) => {setDescription(e.target.value)}}
                value={description}/>
                <button className="bg-indigo-500 px-3 py-1 text-white">
                    Guardar
                </button>
            </form>
        </div>
    )
}

export default TaskForm