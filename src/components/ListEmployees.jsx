import { useContext } from 'react';
import { EmployeesContext } from '../context/EmployeesContext';

function ListEmployees() {
  const { employees } = useContext(EmployeesContext);

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee, index) => (
          <li key={index}>
            {employee.firstName} {employee.lastName} - {employee.department}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListEmployees;
