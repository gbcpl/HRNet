import { Input } from '@mui/material';
import { Controller } from 'react-hook-form';
import PropTypes from 'prop-types';

const TextInput = ({ name, id, control }) => (
  <div className="input-field">
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange } }) => <Input onChange={onChange} id={id} className='inputs' />}
    />
  </div>
);

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
};

export default TextInput;