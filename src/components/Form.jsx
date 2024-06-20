import states from '../datas/states.js';
import { useContext, useState } from 'react';
import dayjs from 'dayjs';
import Calendar from './Calendar.jsx';
import { Input, FormControl, Select, MenuItem } from '@mui/material';
import { EmployeesContext } from '../context/EmployeesContext'; 
import SaveModal from './SaveModal.jsx';

function Form() {
  const { saveEmployee } = useContext(EmployeesContext); 
  const [selectedState, setSelectedState] = useState(states[0].name);
  const [department, setDepartment] = useState("Sales");
  const [dateOfBirth, setDateOfBirth] = useState(dayjs());
  const [startDate, setStartDate] = useState(dayjs());
  const [openSaveModal, setOpenSaveModal] = useState(false); 
  const [errorMessage, setErrorMessage] = useState("");
  
  function handleSaveEmployee (e) {
    e.preventDefault(); 
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const street = document.getElementById('street');
    const city = document.getElementById('city');
    const zipCode = document.getElementById('zip-code');

    if (!firstName.value || !lastName.value || !street.value || !city.value || !zipCode.value) {
      setErrorMessage("Please fill in all informations about the employee.");
      return;
    }

    const employee = {
        firstName: firstName.value,
        lastName: lastName.value,
        dateOfBirth: dateOfBirth.format('DD-MM-YYYY'),
        startDate: startDate.format('DD-MM-YYYY'),
        department: department,
        street: street.value,
        city: city.value,
        state: selectedState,
        zipCode: zipCode.value
    };
    saveEmployee(employee);
    setOpenSaveModal(true);
    setErrorMessage("");
  }

  return (
    <>
      <form action="#" id="create-employee">
        <div className="form">
          <div className="employee-infos">
            <label htmlFor="first-name">First Name</label>
            <Input id="first-name" className='inputs' />
            <label htmlFor="last-name">Last Name</label>
            <Input id="last-name" className='inputs' />
            <label htmlFor="date-of-birth">Date of Birth</label>
            <Calendar id="date-of-birth" value={dateOfBirth} onChange={setDateOfBirth} />
            <label htmlFor="start-date">Start Date</label>
            <Calendar id="start-date" value={startDate} onChange={setStartDate} />
          </div>
          <fieldset className="address">
            <legend>Address</legend>
            <label htmlFor="street">Street</label>
            <Input id="street" type="text" />
            <label htmlFor="city">City</label>
            <Input id="city" type="text" />
            <label htmlFor="state">State</label>
            <FormControl fullWidth>
              <Select
                labelId="state-label"
                id="state"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
              >
                {states.map((state, index) => (
                  <MenuItem value={state.name} key={index}>{state.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <label htmlFor="zip-code">Zip Code</label>
            <Input id="zip-code" type="number" />
          </fieldset>
        </div>
        <div className="department">
          <label htmlFor="department">Department</label>
          <FormControl fullWidth>
            <Select
              labelId="department-label"
              id="department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            >
              <MenuItem value="Sales">Sales</MenuItem>
              <MenuItem value="Marketing">Marketing</MenuItem>
              <MenuItem value="Engineering">Engineering</MenuItem>
              <MenuItem value="Human Resources">Human Resources</MenuItem>
              <MenuItem value="Legal">Legal</MenuItem>
            </Select>
          </FormControl>
        </div>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <button id="save" onClick={handleSaveEmployee}>Save</button>
      <SaveModal open={openSaveModal} onClose={() => setOpenSaveModal(false)} />
    </>
  );
}

export default Form;
