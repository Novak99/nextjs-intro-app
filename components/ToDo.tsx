'use client'

import { completeTodo, deleteTodo } from "@/utils/actions"
import { startTransition, useTransition } from "react"

const ToDo = ({ todo }: any) => {
    return (
        <div className="flex mb-4 items-center gap-2">
            <div style={{ opacity: todo.completed ? 0.5 : 1, textDecoration: todo.completed ? 'line-through' : 'none' }} className="w-full text-grey-darkest" onClick={() => startTransition(() => completeTodo(todo.id))}>{todo.content}</div>
            <button onClick={() => deleteTodo(todo.id)} className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">Remove</button>
        </div>
    )
}

export default ToDo