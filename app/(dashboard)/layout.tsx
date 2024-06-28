import NewToDoForm from "@/components/NewToDoForm"

const DashboardLayout = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <>
      <div className="bg-gray-700 rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <h1>Todo List</h1>
        <NewToDoForm />
        {children}
      </div>
    </>
  )
}

export default DashboardLayout