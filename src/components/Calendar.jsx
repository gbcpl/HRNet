import { useState, useEffect } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function Calendar({ id, value, onChange }) {
  const [calendarValue, setCalendarValue] = useState(value);

  useEffect(() => {
    setCalendarValue(value);
  }, [value]);

  const handleChange = (newValue) => {
    setCalendarValue(newValue);
    onChange(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateTimePicker']}>
        <DateTimePicker
          id={id}
          value={calendarValue}
          onChange={handleChange}
          views={['year', 'month', 'day']}
          format="DD/MM/YYYY" 
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}