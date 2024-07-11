import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';
import Labels from '../atoms/Labels';


export default function Calendar({ name, control, id, htmlFor, title, errors }) {
  return (
    <div>
      <Labels htmlFor={htmlFor} title={title} />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DateTimePicker']}>
          <Controller
            name={name}
            control={control}
            defaultValue={null}
            render={({ field }) => (
              <DateTimePicker
                {...field}
                id={id}
                value={field.value || null}
                onChange={(newValue) => {
                  field.onChange(newValue)
                  console.log(newValue)
                }}
                textField={(props) => <TextField  {...props} id={id} />}
                views={['year', 'month', 'day']}
                format="DD/MM/YYYY"
              />
            )}
          />
        </DemoContainer>
        {errors && <p className="error-message">{errors}</p>}
      </LocalizationProvider>
    </div>
  );
}
