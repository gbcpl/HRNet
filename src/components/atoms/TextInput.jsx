import { Input } from '@mui/material';
import { Controller } from 'react-hook-form';

const TextInput = ({ name, id, control }) => (
  <div className="input-field">
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange } }) => <Input onChange={onChange} id={id} className='inputs' />}
    />
  </div>
);

export default TextInput;