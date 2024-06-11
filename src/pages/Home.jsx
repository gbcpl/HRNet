import Form from "../components/Form"

function Home() {
  return (
    <div>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <a href="employee-list.html">View Current Employees</a>
        <h2>Create Employee</h2>
        <Form />
      </div>
    </div>
  )
}

export default Home