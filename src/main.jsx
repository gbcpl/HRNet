import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './css/style.css'
import { EmployeesProvider } from './context/EmployeesContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <EmployeesProvider>
      <App />
    </EmployeesProvider>
  </React.StrictMode>
)
