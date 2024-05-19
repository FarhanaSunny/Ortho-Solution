import TextField from '@mui/material/TextField';

// @ts-ignore
export default function FormTextFields(props) {
  console.log("props", props);
    const styles = {
      width: '60%',
      marginLeft: 'auto',
      marginRight: 'auto',            
      paddingBottom: 0,
      marginTop: 20,
      fontWeight: 500,
      backgroundColor: "#f8fafc",
      ...props.style
      };
  return (
        <TextField
          required
          style={styles}
          id="outlined-required"
          label={props.label}
          defaultValue={props.defaultValue}
        />
  );
}
