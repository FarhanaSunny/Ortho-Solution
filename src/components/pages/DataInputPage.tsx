import { Button, Stack, TextField } from "@mui/material"
import { useState } from "react";
import { useNavigate } from 'react-router-dom'

function DataInputPage() {
    // const [emailInput, setEmailInput] = useState('');

    // const onEmailInputChange = (event) => {
    //     setEmailInput(event.target.value)
    // }
    const [patientsinfo, setPatientInfo] = useState('')
    const [date, setDate] = useState('')
    const [initialBond, setInitialBond] = useState('')
    const [toothNum, setToothNum] = useState('')
    const [rebondBy, setRebondBy] = useState('')
    const [addComment, setAddComment] = useState('')
    const navigate = useNavigate();

    const onLoginClicked = () => {
        console.log('Logged Out!')
        navigate('/')
    }

    return (
        <div>
            <h1>Members and Admin's Page</h1>
            <Stack spacing={2}>
                {/* <TextField id="outlined-basic" label="Email address" variant="outlined" value={emailInput} onChange={onEmailInputChange} /> */}
                <TextField id="outlined-basic" label="Patient's Name/Tracker number" variant="outlined" value={patientsinfo} onChange={(e) => setPatientInfo(e.target.value)}/>
                <TextField id="outlined-basic" label="Date" variant="outlined" value={date} onChange={(e) => setDate(e.target.value)}/>
                <TextField id="outlined-basic" label="Initially Bonded by" variant="outlined" value={initialBond}  onChange={(e) => setInitialBond(e.target.value)}/>
                <TextField id="outlined-basic" label="Tooth number" variant="outlined" value ={toothNum} onChange={(e) => setToothNum(e.target.value)}/>
                <TextField id="outlined-basic" label="Rebonded by" variant="outlined" value={rebondBy} onChange={(e) => setRebondBy(e.target.value)}/>
                <TextField id="outlined-basic" label="Additional Comments" variant="outlined" value={addComment} onChange={(e) => setAddComment(e.target.value)}/>
            </Stack>
            <Button type='submit'>Submit</Button>
            <Button variant="contained" onClick={onLoginClicked}>Log Out</Button>
        </div>
    )
}


export default DataInputPage