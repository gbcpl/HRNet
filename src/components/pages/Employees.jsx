import { Link } from "react-router-dom";
import { DataTables } from '../../../../react-data-tables/lib/components/DataTables/DataTables.tsx';
import { useEmployeesContext } from "../../context/hooks.js";

const columns = [
  { column: 'firstName', index: 'firstName', sortable: true },
  { column: 'lastName', index: 'lastName', sortable: true },
  { column: 'dateOfBirth', index: 'dateOfBirth', sortable: true },
  { column: 'startDate', index: 'startDate', sortable: true },
  { column: 'street', index: 'street', sortable: true },
  { column: 'zipCode', index: 'zipCode', sortable: true },
  { column: 'city', index: 'city', sortable: true },
  { column: 'state', index: 'state', sortable: true },  
  { column: 'department', index: 'department', sortable: true },
];

function Employees() {
  const { employees } = useEmployeesContext();

  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <DataTables data={employees} rowsPerPage={5} columns={columns}/>
      <Link to="/" relative="path">Home</Link>
    </div>
  );
}

export default Employees;