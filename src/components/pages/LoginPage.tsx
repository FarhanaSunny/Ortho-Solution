import { Button, Stack } from "@mui/material";
import Greeter from "../Greeter";
import FormTextFields from "../FormTextField";
import { useState } from "react";
import { useNavigate } from "react-router-dom"


function LoginPage() {
    const [emailInput, setEmailInput] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    

    const loginStyle = {
        image: {

        },
        body: {
            // backgroundColor: "#f3e8ff",
            margin: 0,
            width: '100vw',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }
        // password: {
        //     backgroundColor: "#f3e8ff"
        // }
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
        //@ts-ignore
        <div style={loginStyle.body}>
            <img src={"./logo.png"} />
            <h1 style={heading}>Welcome Back</h1>
            <Stack spacing={2} direction={'column'}>
                <FormTextFields 
                    id="outlined-basic" 
                    label="Email address" 
                    variant="outlined" value={emailInput} 
                    onChange={onEmailInputChange} />
                <FormTextFields
                    id="outlined-basic"
                    label="Password"
                    type="password"
                    variant="outlined"
                    value={password}
                    //@ts-ignore
                    onChange={(e) => setPassword(e.target.value)}
                  
                />
            </Stack>
        
            <Button variant="contained" onClick={onLoginClicked}>Log in</Button> 

        </div>
    
    )
}

export default LoginPage