import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../validation.js'
import states from '../../datas/states.js';
import departments from '../../datas/departments.js'
import { useContext, useState } from 'react';
import dayjs from 'dayjs';
import Calendar from '../molecules/Calendar.jsx';
import { EmployeesContext } from '../../context/EmployeesContext.jsx'; 
import SaveModal from '../molecules/SaveModal.jsx';
import FormField from '../molecules/FormField.jsx';
import SelectInputs from '../molecules/SelectInputs.jsx';

function Form() {
  const { saveEmployee } = useContext(EmployeesContext);
  const { handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {state: "State", department: "Department"}
  });

  const [selectedState, setSelectedState] = useState("State");
  const [department, setDepartment] = useState("Department");
  const [openSaveModal, setOpenSaveModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = (data) => {
    const employee = {
      firstName: data.firstName,
      lastName: data.lastName,
      dateOfBirth: data.dateOfBirth ? dayjs(data.dateOfBirth).format('DD-MM-YYYY') : null,
      startDate: data.startDate ? dayjs(data.startDate).format('DD-MM-YYYY') : null,
      department: department,
      street: data.street,
      city: data.city,
      state: selectedState,
      zipCode: data.zipCode,
    };
    saveEmployee(employee);
    setOpenSaveModal(true);
    setErrorMessage('');
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} id="create-employee">
        <div className="form">
          <div className="employee-infos">
            <FormField id="first-name" name="firstName" label="First Name" control={control} errors={errors}></FormField>
            <FormField id="last-name" name="lastName" label="Last Name" control={control} errors={errors}></FormField>
            <Calendar name="dateOfBirth" control={control} errors={errors.dateOfBirth?.message} htmlFor="date-of-birth" title="Date of Birth" />
            <Calendar name="startDate" control={control} errors={errors.startDate?.message} htmlFor="start-date" title="Start Date" />
          </div>
          <fieldset className="address">
            <legend>Address</legend>
            <FormField id="street" name="street" label="Street" control={control} errors={errors}></FormField>
            <FormField id="city" name="city" label="City" control={control} errors={errors}></FormField>
            <SelectInputs
              id="state"
              name="state"
              value={selectedState}
              setter={setSelectedState}
              control={control}
              data={states}
              singleData={(item) => item.name}
              htmlFor="state"
              title="State" 
              errors={errors}
            />
            <FormField id="zip-code" name="zipCode" label="Zip Code" control={control} errors={errors}></FormField>
          </fieldset>
        </div>
        <div className="department">
          <SelectInputs
            id="department"
            name="department"
            value={department}
            setter={setDepartment}
            control={control}
            data={departments}
            singleData={(item) => item}
            htmlFor="department"
            title="Department"
            errors={errors}
          />
        </div>
        <button id="save" type="submit">Save</button>
      </form>
      <SaveModal open={openSaveModal} onClose={() => setOpenSaveModal(false)} />
    </>
  );
}

export default Form;