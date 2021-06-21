import React from 'react'
import { ACTIONS } from './App'

export default function Todo({todo, dispatch}) {
    function toggleTodo() {
        dispatch({type: ACTIONS.TOGGLE_TODO, payload: {id: todo.id}})
    }

    function deleteTodo() {
        dispatch({type: ACTIONS.DELETE_TODO, payload: {id: todo.id}})
    }
    
    const todoStyle = {
        color: todo.completed ? "gray" : "black",
        textDecoration : todo.completed ? "line-through" : "none"
    }

    return (
        <div style={todoStyle}>
            {todo.todoText}
            <button onClick={toggleTodo}>Toggle</button>
            <button onClick={deleteTodo}>Delete</button>
        </div>
    )
}
