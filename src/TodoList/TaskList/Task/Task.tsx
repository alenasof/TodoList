import React from 'react';
import {TaskType} from "../../../App";

type TaskListPropType = {
    isDone: boolean;
    title: string;
    removeTasks: (id: number) => void;
    id:number;
}

const Task = (props:TaskListPropType ) => {
    return (
        <li>
            <input type="checkbox" checked={props.isDone}/>
            <span>{props.title}</span>
            <button onClick={() =>props.removeTasks(props.id)}>X</button>
        </li>
    );
};

export default Task;

//<Task key={index} isDone={task.isDone} title={task.title} removeTasks={props.removeTasks}
//<button onClick={props.removeTasks(props.id)}>X</button>