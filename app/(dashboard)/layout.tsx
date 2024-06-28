import NewToDoForm from "@/components/NewToDoForm"

const DashboardLayout=({children}: {
  children: React.ReactNode
}) => {
  return (
    <>
    <h1>Dashboard</h1>
      <NewToDoForm />
      {children}
    </>
  )
}

export default DashboardLayout