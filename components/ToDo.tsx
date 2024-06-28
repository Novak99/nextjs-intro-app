'use client'

import { completeTodo, deleteTodo } from "@/utils/actions"
import { startTransition, useTransition } from "react"

const ToDo = ({ todo }:any) => {
    return (
        <div className="flex gap-2">
            <div
                style={{ opacity: todo.completed ? 0.5 : 1, textDecoration: todo.completed ? 'line-through' : 'none' }}
                onClick={() => startTransition(() => completeTodo(todo.id))}>{todo.content}</div>

            <button className="bg-red-500 text-white rounded-full block px-1" onClick={() => deleteTodo(todo.id)}>X</button>
        </div>
    )
}

export default ToDo