import { Link } from "react-router-dom"
import ListEmployees from '../components/ListEmployees';

function Employees() {
  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <ListEmployees />
      <table id="employee-table" className="display"></table>
      <Link to="/" relative="path">Home</Link>
    </div>  
  )
}

export default Employees