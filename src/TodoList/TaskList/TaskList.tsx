import React from 'react';
import {TaskType} from "../../App";
import Task from "./Task/Task";


type TaskListPropType = {
    tasks: Array<TaskType>
    removeTasks: (id: number) => void
}

const TaskList = (props: TaskListPropType, tasks: TaskType) => {
const taskItem = props.tasks.map(task => <Task key={task.id} id = {task.id}isDone={task.isDone} title={task.title} removeTasks={props.removeTasks} />)
    return (
        <ul>
            {taskItem}
        </ul>
    )
}

export default TaskList;

