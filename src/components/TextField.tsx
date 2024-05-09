import TextField from '@mui/material/TextField';

// @ts-ignore
export default function FormTextFields(props) {
    const styles = {
        textField: {
            width: '90%',
            marginLeft: 'auto',
            marginRight: 'auto',            
            paddingBottom: 0,
            marginTop: 0,
            fontWeight: 500
        }
    };
  return (
        <TextField
          required
          style={styles.textField}
          id="outlined-required"
          label={props.label}
          defaultValue={props.defaultValue}
        />
  );
}
