import { newTodo } from '@/utils/actions'
const NewToDoForm = ({ }) => {
  return (
    <div>
      <form action={newTodo}>
        <div className="flex mt-4 mb-8">
          <input name='content' type="text" className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-black/80" placeholder="Add Todo" />
          <button className="bg-lime-600 flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal" type="submit">Add</button>
        </div>
      </form>
    </div>
  )
}

export default NewToDoForm