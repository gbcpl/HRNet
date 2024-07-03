import { Link } from "react-router-dom";
import { DataTables } from '../../../../react-data-tables/lib/components/DataTables/DataTables.tsx';
import { useEmployeesContext } from "../../context/hooks.js";

function Employees() {
  const { employees } = useEmployeesContext()

  if (!employees || employees.length === 0) {
    return (
      <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        <p>No data available in table</p>
        <Link to="/" relative="path">Home</Link>
      </div>
    );
  }

  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <DataTables data={employees} rowsPerPage={4}/>
      <Link to="/" relative="path">Home</Link>
    </div>
  );
}

export default Employees;
