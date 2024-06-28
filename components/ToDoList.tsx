import React from 'react'
import ToDo from './ToDo'

const ToDoList = ({todos}:any) => {
  return (
    <div>{todos.map((todo:any) => <ToDo key={todo.id} todo={todo} />)}</div>
  )
}

export default ToDoList