import { Link } from "react-router-dom"
import Table from '../components/Table';
import { useContext } from "react";
import { EmployeesContext } from "../context/EmployeesContext";

function Employees() {
  const { employees } = useContext(EmployeesContext);

  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      {employees.length > 0 ? (
        <Table object={employees}/>
      ) : 
      <p>There is no employee.</p>
      }
      <Link to="/" relative="path">Home</Link>
    </div>  
  )
}

export default Employees