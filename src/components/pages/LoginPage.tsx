import { Button, Stack } from "@mui/material";
import FormTextFields from "../FormTextField";
import { useState } from "react";
import { useNavigate } from "react-router-dom"


function LoginPage() {
    const [emailInput, setEmailInput] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const style = {
        body: {
            backgroundColor: "#ecfccb"
        },
        password: {
            backgroundColor: "grey"
        }
    }

    //@ts-ignore
    const onEmailInputChange = (event) => {
        setEmailInput(event.target.value)
    }

    const onLoginClicked = () => {
        console.log('Logged in!')
        navigate('input')
    }

    const heading = {
        fontSize: '70px',
        color: '#15803d',
    
    }
    return (
        <div style={style.body}>
            <img src={"./logo.png"} />
            <h1 style={heading}>Welcome Back</h1>
            <Stack spacing={2} direction={'column'}>
                <FormTextFields id="outlined-basic" label="Email address" variant="outlined" value={emailInput} onChange={onEmailInputChange} />
                <FormTextFields
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={style.password} 
                />
            </Stack>
        
            <Button variant="contained" onClick={onLoginClicked}>Log in</Button>

        </div>
    
    )
}

export default LoginPage