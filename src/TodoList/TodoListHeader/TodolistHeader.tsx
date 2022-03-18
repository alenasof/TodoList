import React from 'react';

type TodolistHeaderPropType = {
    title:string
}

const TodolistHeader = (props:TodolistHeaderPropType) => {
    return (
        <h3>{props.title}</h3>
    );
};

export default TodolistHeader;
