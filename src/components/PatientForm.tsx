import { Button, Stack, TextField, Collapse} from "@mui/material"
import { useState } from "react";

function PatientForm() {

    const [patientsInfo, setPatientInfo] = useState('')
    const [date, setDate] = useState('')
    const [initialBond, setInitialBond] = useState('')
    const [toothNum, setToothNum] = useState('')
    const [rebondBy, setRebondBy] = useState('')
    const [addComment, setAddComment] = useState('')
    const [showForm, setShowForm] = useState(false);
    const handleToggleForm = () => {
        setShowForm(!showForm);
      };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
          patientsInfo,
          date,
          initialBond,
          toothNum,
          rebondBy,
          addComment
        });
      };
    return (
      <div>
            <Button variant="contained" onClick={handleToggleForm}>
        {showForm ? 'Hide Form' : 'Show Form'}
      </Button>
      <Collapse in={showForm}>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField 
              id="outlined-basic" 
              label="Patient's Name/Tracker number" 
              variant="outlined" 
              value={patientsInfo} 
              onChange={(e) => setPatientInfo(e.target.value)} 
            />
            <TextField 
              id="outlined-basic" 
              label="Date" 
              variant="outlined" 
              value={date} 
              onChange={(e) => setDate(e.target.value)} 
            />
            <TextField 
              id="outlined-basic" 
              label="Initially Bonded by" 
              variant="outlined" 
              value={initialBond} 
              onChange={(e) => setInitialBond(e.target.value)} 
            />
            <TextField 
              id="outlined-basic" 
              label="Tooth number" 
              variant="outlined" 
              value={toothNum} 
              onChange={(e) => setToothNum(e.target.value)} 
            />
            <TextField 
              id="outlined-basic" 
              label="Rebonded by" 
              variant="outlined" 
              value={rebondBy} 
              onChange={(e) => setRebondBy(e.target.value)} 
            />
            <TextField 
              id="outlined-basic" 
              label="Additional Comments" 
              variant="outlined" 
              value={addComment} 
              onChange={(e) => setAddComment(e.target.value)} 
            />
            <Button type='submit'>Submit</Button>
          </Stack>
        </form>
        </Collapse>
            
      </div>
      )
}
export default PatientForm