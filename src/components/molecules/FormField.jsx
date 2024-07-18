import Labels from "../atoms/Labels";
import TextInput from "../atoms/TextInput";
import PropTypes from "prop-types";

const FormField = ({ id, name, label, control, errors }) => (
  <div className="form-field">
      <Labels htmlFor={name} title={label} />
      <TextInput id={id} name={name} control={control}/>
    {errors[name] && <p className="error-message">{errors[name].message}</p>}
  </div>
);

FormField.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  errors: PropTypes.object,
};

export default FormField;