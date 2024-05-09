import {Select, MenuItem} from '@mui/material';
// @ts-ignore

export default function FormSelectDropDown(props) {
   
return (
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={props.age}
    label="Age"
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>

)

}