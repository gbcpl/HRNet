import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import states from '../datas/states.js'
import { useState } from 'react';

function Form() {
  const [selectedState, setSelectedState] = useState(states[0].name);
  const [department, setDepartment] = useState("Sales")

  function saveEmployee() {
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const dateOfBirth = document.getElementById('date-of-birth');
    const startDate = document.getElementById('start-date');
    const street = document.getElementById('street');
    const city = document.getElementById('city');
    const zipCode = document.getElementById('zip-code');

    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    const employee = {
        firstName: firstName.value,
        lastName: lastName.value,
        dateOfBirth: dateOfBirth.value,
        startDate: startDate.value,
        department: department,
        street: street.value,
        city: city.value,
        state: selectedState,
        zipCode: zipCode.value
    };
    employees.push(employee);
    localStorage.setItem('employees', JSON.stringify(employees));
    console.log(employees);
  }

  return (
    <>
      <form action="#" id="create-employee">
        <label htmlFor="first-name">First Name</label>
        <input type="text" id="first-name" />

        <label htmlFor="last-name">Last Name</label>
        <input type="text" id="last-name" />

        <label htmlFor="date-of-birth">Date of Birth</label>
        <input id="date-of-birth" type="text" />

        <label htmlFor="start-date">Start Date</label>
        <input id="start-date" type="text" />

        <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input id="street" type="text" />

            <label htmlFor="city">City</label>
            <input id="city" type="text" />

            <label htmlFor="state">State</label>
            <Dropdown as={ButtonGroup} onSelect={(e) => setSelectedState(e)}>
              <Button variant="success">{selectedState}</Button>
              <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
              <Dropdown.Menu className="dropdown-menu" id="state">
                {states.map((state, index) => (
                  <Dropdown.Item eventKey={state.name} key={index}>{state.name}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <label htmlFor="zip-code">Zip Code</label>
            <input id="zip-code" type="number" />
        </fieldset>
        <label htmlFor="department">Department</label>
        <Dropdown as={ButtonGroup} onSelect={(e) => setDepartment(e)}>
          <Button variant="success">{department}</Button>
  
          <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
          
          <Dropdown.Menu id="department">
            <Dropdown.Item eventKey="Sales" href="#/action-1">Sales</Dropdown.Item>
            <Dropdown.Item eventKey="Marketing" href="#/action-2">Marketing</Dropdown.Item>
            <Dropdown.Item eventKey="Engineering" href="#/action-3">Engineering</Dropdown.Item>
            <Dropdown.Item eventKey="Human Resources" href="#/action-4">Human Resources</Dropdown.Item>
            <Dropdown.Item eventKey="Legal" href="#/action-5">Legal</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </form>
      <button id="save" onClick={saveEmployee}>Save</button>
    </>
  )
}

export default Form