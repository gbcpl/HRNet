import { createContext, useState } from 'react';

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
