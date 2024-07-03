import { MenuItem, Select, FormControl } from "@mui/material"

const SelectInputs = ({ id, value, setter, data, singleData, htmlFor, title }) => {
  return (
    <div>
      <label htmlFor={htmlFor}>{title}</label>
      <FormControl fullWidth>
        <Select
          labelId={`${id}-label`}
          id={id}
          value={value}
          onChange={(e) => setter(e.target.value)}
        >
          {data.map((item, index) => (
            <MenuItem value={singleData(item)} key={index}>{singleData(item)}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}

export default SelectInputs