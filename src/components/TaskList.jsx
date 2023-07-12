import React from "react"

import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskList(){

    const props = useContext(TaskContext);
    
    if(props.tasks.length === 0){
        return <h1 className="text-white text-4xl text-center">No hay tareas</h1>

    }

    return (
    <div className="grid grid-cols-4 gap-2">
        {props.tasks.map((task) => (
            <TaskCard key={task.id} task={task}/>
        ))}
    </div>
    );
     
}

export default TaskList