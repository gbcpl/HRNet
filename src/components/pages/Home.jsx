import { Link } from "react-router-dom"
import Form from "../organisms/Form"

function Home() {
  return (
    <div>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/employees" relative="path">View Current Employees</Link>
        <h2>Create Employee</h2>
        <Form />
      </div>
    </div>
  )
}

export default Home 