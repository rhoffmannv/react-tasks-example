import { createContext, useState, useEffect } from "react"
import { tasks as data } from "../data/tasks"

export const TaskContext = createContext();

export function TaskContextProvider(props) {
    let x = 20;

    const [tasks, setTasks] = useState([]);

    function createTask(task) {
        console.log("create from app");
        const newTask = {
            title: task.title,
            id: tasks.length,
            description: task.description

        }
        setTasks([...tasks, newTask])//append
    }

    function deleteTask(task) {
        setTasks(tasks.filter(taskAux => taskAux.id !== task.id));
    }

    const array = {
        tasks: tasks,
        createTask: createTask,
        deleteTask: deleteTask
    }


    useEffect(() => {
        setTasks(data)
    }, [])

    return (
        <TaskContext.Provider value={ array }>
            {props.children}
        </TaskContext.Provider>


    )
}

