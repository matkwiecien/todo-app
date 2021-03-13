import React, { useState } from "react";

const Todos = () => {
    const [ tasks, setTasks ] = useState<string[]>([]);

    const [ task, setTask ] = useState<string>("");

    const saveTask = () => {
        setTasks(tasks => [task, ...tasks])
        setTask('')
    }

    return (
        <>
            <form onSubmit={(event) => {
                event.preventDefault();
                saveTask();
            }}>
                <label>
                    Task:
                    <input value={task} type="text" placeholder="Buy milk" name="todo" onChange={event => setTask(event.target.value)}/>
                </label>
                <button>Save</button>
            </form>
            <ul>
                {
                    tasks.map((task, index) => <li key={index}>{task}</li>)
                }
            </ul>
        </>
    )
}

export default Todos;