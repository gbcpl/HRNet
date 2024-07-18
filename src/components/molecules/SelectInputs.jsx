import { MenuItem, Select, FormControl } from "@mui/material"
import Labels from "../atoms/Labels"
import { Controller } from "react-hook-form"
import PropTypes from "prop-types";

const SelectInputs = ({ id, name, setter, data, singleData, htmlFor, title, control, errors }) => {
  return (
    <div>
      <Labels htmlFor={htmlFor} title={title} />
      <FormControl fullWidth>
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <Select
              labelId={`${id}-label`}
              id={id}
              {...field}
              value={field.value}
              onChange={(e) => {
                setter(e.target.value);
                field.onChange(e);
              }}
              renderValue={(value) => {
                if (value === title) {
                  return <em>{value}</em>
                }
                return value;
              }}
            >
              <MenuItem value={title} disabled>
                {title}
              </MenuItem>
              {data.map((item, index) => (
                <MenuItem value={singleData(item)} key={index}>
                  {singleData(item)}
                </MenuItem>
              ))}
            </Select>
          )}
        />
      </FormControl>
      {errors[name] && <p className="error-message">{errors[name].message}</p>} 
    </div>
  );
};

SelectInputs.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  setter: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
  singleData: PropTypes.func.isRequired,
  htmlFor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  errors: PropTypes.object,
};

export default SelectInputs