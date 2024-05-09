import { Button, Stack, TextField } from "@mui/material"
import { useState } from "react";

function LoginPage() {
    const [emailInput, setEmailInput] = useState('');

    const onEmailInputChange = (event) => {
        setEmailInput(event.target.value)
    }

    const onLoginClicked = () => {
        console.log('Logged in!')
    }

    return (
        <div>
            <h1>Welcome Back</h1>
            <Stack spacing={2}>
                <TextField id="outlined-basic" label="Email address" variant="outlined" value={emailInput} onChange={onEmailInputChange} />
                <TextField id="outlined-basic" label="Password" variant="outlined" />
            </Stack>
            <Button variant="contained" onClick={onLoginClicked}>Log in</Button>
        </div>
    )
}

export default LoginPage