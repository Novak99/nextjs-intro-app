const DocIdPage = ({ params, searchParams }: { params: { id: string }, searchParams: { [key: string]: string }}) => {
  console.log("Params", params, "searchParams",searchParams)
  return (
    <div>DocIdPage {params.id}</div>
  )
}

export default DocIdPage