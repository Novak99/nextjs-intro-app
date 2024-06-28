'use server'
import db from '@/utils/db'
import { revalidatePath } from 'next/cache'

export const newTodo = async(formData: FormData) => {
    const todo = await db.todo.create({
        data: {
            content: formData.get('content') as string
        }
    })

    revalidatePath('/todos')
} 

// export const completeTodo = async(id: string) => {
//     await db.todo.update({
//         where: {id},
//         data: {completed: true}
//     }
//     )
//     revalidatePath('/todos')
// }

export const completeTodo = async(id: string) => {
    const todo = await db.todo.findUnique({where: {id}})
    if (!todo) {
        return
    }
    await db.todo.update({
        where: {id},
        data: {completed: !todo.completed}
    })
    revalidatePath('/todos')
}

export const deleteTodo = async(id: string) => {
    await db.todo.delete({where: {id}})
    revalidatePath('/todos')
}