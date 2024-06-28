import { newTodo } from '@/utils/actions'
const NewToDoForm = ({}) => {
  return (
    <div>
        <form action={newTodo}>
            <input name='content' type="text" placeholder="Add new todo?" className="border border-black" />
            <button type="submit">Add NewTodo</button>
        </form>
    </div>
  )
}

export default NewToDoForm