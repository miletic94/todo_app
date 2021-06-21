import { useState, useReducer } from "react"
import './App.css';
import Todo from "./Todo"

export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo"
}

function App() {
  const [todos, dispatch] = useReducer(reducer, [])
  const [todoText, setTodoText] = useState("")
  
  function reducer(todos, action) {
    switch (action.type) {
      case ACTIONS.ADD_TODO: 
        return [...todos, newTodo(action.payload.todoText)]
      case ACTIONS.TOGGLE_TODO:
        return todos.map(todo => {
          if(todo.id === action.payload.id) {
            return {...todo, completed: !todo.completed}
          }
          return todo
        })
      case ACTIONS.DELETE_TODO:
        console.log("del")
        return todos.filter(todo => todo.id !== action.payload.id)
      default:
        return todos;
    }
  }

  function newTodo(todoText) {
    return {id: Date.now(), todoText: todoText, completed: false}
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch({type: ACTIONS.ADD_TODO, payload: {todoText : todoText}})
    setTodoText("")
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={todoText} onChange={e => setTodoText(e.target.value)}/> 
      </form>
      {todos.map(todo => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
      })}
    </>
    )
}

export default App;
