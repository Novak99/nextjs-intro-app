import ToDoList from '@/components/ToDoList'
import db from '@/utils/db'
import { redirect } from 'next/navigation'

// const getData = async () => {
//     await new Promise<void>((resolve, reject) => {
//         setTimeout(() => resolve(), 500)
//     })
//     const todos = await db.todo.findMany({})
    
//     return todos
// }

const getData = async () => {
    const response = await fetch('http://localhost:3000/api/todo', {
        credentials: 'include'
    })
    const data = await response.json()
    if (!data.todos) {
        return
    }
    return data.todos
}

const ToDoPage = async () => {

    const todos = await getData()
    return (
        <>
        {todos && todos.length
        ? <ToDoList todos={todos} />
        : <div>There are no todos yet...</div>
        }
        </>
    )
}

export default ToDoPage