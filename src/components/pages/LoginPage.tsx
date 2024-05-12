import { Button, Stack, TextField } from "@mui/material"
import { useState } from "react";
import { Link } from "react-router-dom"

function LoginPage() {
    const [emailInput, setEmailInput] = useState('');
    const [password, setPassword] = useState('');

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
                <TextField id="outlined-basic" label="Password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </Stack>
            
            <Link to='input'><Button variant="contained" onClick={onLoginClicked}>Log in</Button></Link>
        </div>
    )
}

export default LoginPage