import React, { useState } from 'react';

const App = () => {
    const [ tasks, setTasks ] = useState<string[]>([]);

    const [ task, setTask ] = useState<string>("");

    const saveTask = () => {
        setTasks(tasks => [task, ...tasks])
        setTask('')
    }

    return (
        <div>
            <main>
                <h1>TODO APP</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
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
            </main>
        </div>
    );
}

export default App;
