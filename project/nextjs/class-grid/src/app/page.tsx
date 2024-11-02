import AssignmentGrid from "./component/AssignmentGrid"
export default function home(){
  return(
    <div className="container mx-auto h-screen flex flex-col justify-center">
  <h1 className="text-center text-2xl font-bold mb-4">Class 5<sup>th</sup> Assignment</h1>

  <AssignmentGrid />

</div>
  )
}