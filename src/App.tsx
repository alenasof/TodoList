import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList/TodoList";


export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

function App() {
    const todoListTitle_1: string = "What to learn"
    // const todoListTitle_2: string =  "What to buy"
    //const todoListTitle_3: string = "What to reed"

   const [tasks, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS/ES6", isDone: true},
        {id: 3, title: "React", isDone: false},
    ])

    let removeTasks = (id: number) => {
        const filteredTasks = tasks.filter(t => t.id !== id)
      setTasks(filteredTasks)
    }

 /*  let removeTasks = (id: number) => {
        const filteredTasks = tasks.filter(t => t.id !== id)
        setTasks(filteredTasks)
    }*/

 /*   const tasks:Array<TaskType> =[
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS/ES6", isDone: true},
        {id: 3, title: "React", isDone: false},
    ]*/
    return (
        <div className="App">
            <TodoList title={todoListTitle_1} tasks={tasks} removeTasks={removeTasks} />
        </div>
    );
}

export default App;


