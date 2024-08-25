import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const EmployeesContext = createContext();

export const EmployeesProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  const saveEmployee = (employee) => {
    setEmployees((prevEmployees) => [...prevEmployees, employee]);
  };

  return (
    <EmployeesContext.Provider value={{ employees, saveEmployee }}>
      {children}
    </EmployeesContext.Provider>
  );
};

EmployeesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
