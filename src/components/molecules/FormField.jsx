import TextInput from "../atoms/TextInput";

const FormField = ({ id, name, label, control, errors }) => (
  <div className="form-field">
    <label htmlFor={name}>{label}</label>
    <TextInput id={id} name={name} control={control}/>
    {errors[name] && <p className="error-message">{errors[name].message}</p>}
  </div>
);

export default FormField;