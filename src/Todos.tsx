import React, { useState } from 'react'

const Todos = () => {
  const [tasks, setTasks] = useState<string[]>([])

  const [task, setTask] = useState<string>('')

  const saveTask = () => {
    setTasks((tasks) => [task, ...tasks])
    setTask('')
  }

  const deleteTask = (index: number) => {
    setTasks((tasks) => {
      const tasksCopy = [...tasks]
      tasksCopy.splice(index, 1)
      return tasksCopy
    })
  }
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          saveTask()
        }}
      >
        <label>
          Task:
          <input
            value={task}
            type='text'
            placeholder='Buy milk'
            name='todo'
            onChange={(event) => setTask(event.target.value)}
          />
        </label>
        <button>Save</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button
              onClick={() => {
                deleteTask(index)
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos
