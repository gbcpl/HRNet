import * as yup from 'yup';

export const schema = yup.object().shape({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  street: yup.string().required('Street is required'),
  city: yup.string().required('City is required'),
  zipCode: yup.string().required('Zip Code is required'),
  dateOfBirth: yup.date().nullable().required('Date of Birth is required').typeError('Invalid date format'),
  startDate: yup.date().nullable().required('Start Date is required').typeError('Invalid date format'),
  department: yup.string().required('Department is required').notOneOf(['Department'], 'Department is required'),
  state: yup.string().required('State is required').notOneOf(['State'], 'State is required'),
});
