import { MenuItem, Select, FormControl } from "@mui/material"
import Labels from "../atoms/Labels"
import { Controller } from "react-hook-form"

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

export default SelectInputs