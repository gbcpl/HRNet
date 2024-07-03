import { useContext } from "react";
import { EmployeesContext } from "./EmployeesContext";

export const useEmployeesContext = () => useContext(EmployeesContext);
