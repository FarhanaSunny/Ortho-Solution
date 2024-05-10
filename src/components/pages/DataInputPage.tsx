import { Button, Stack, TextField } from "@mui/material"
import { useState } from "react";

function DataInputPage() {
    // const [emailInput, setEmailInput] = useState('');

    // const onEmailInputChange = (event) => {
    //     setEmailInput(event.target.value)
    // }

    const onLoginClicked = () => {
        console.log('Logged Out!')
    }

    return (
        <div>
            <h1>Members and Admin's Page</h1>
            <Stack spacing={2}>
                {/* <TextField id="outlined-basic" label="Email address" variant="outlined" value={emailInput} onChange={onEmailInputChange} /> */}
                <TextField id="outlined-basic" label="Patient's Name/Tracker number" variant="outlined" />
                <TextField id="outlined-basic" label="Date" variant="outlined" />
                <TextField id="outlined-basic" label="Initially Bonded by" variant="outlined" />
                <TextField id="outlined-basic" label="Tooth number" variant="outlined" />
                <TextField id="outlined-basic" label="Rebonded by" variant="outlined" />
                <TextField id="outlined-basic" label="Additional Comments" variant="outlined" />
            </Stack>
            <Button variant="contained" onClick={onLoginClicked}>Log Out</Button>
            
        </div>
    )
}


export default DataInputPage