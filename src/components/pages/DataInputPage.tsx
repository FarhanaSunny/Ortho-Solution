import { Button, Stack, TextField, Box, Typography, Avatar } from "@mui/material"
import employee from '../../utils/api';
import { useState } from "react";
import { useNavigate } from 'react-router-dom'

function DataInputPage() {
 
    const [patientsinfo, setPatientInfo] = useState('')
    const [date, setDate] = useState('')
    const [initialBond, setInitialBond] = useState('')
    const [toothNum, setToothNum] = useState('')
    const [rebondBy, setRebondBy] = useState('')
    const [addComment, setAddComment] = useState('')
    const navigate = useNavigate();
    console.log('employee', employee);
    

    const onLoginClicked = () => {
        console.log('Logged Out!')
        navigate('/')
    }
    const onAdminClicked = () => {
       
        navigate('/report')
    }
   
    const datapageStyle = {
        body: {
            margin: 0,
            width: '100%',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }
       
    }

    return (
        <>
        <p>Hello</p>
        <Box sx={{ width: '100%', maxWidth: 500 }}>
            <Typography variant="h6" gutterBottom>
                {employee.name}
            </Typography>
            <Avatar 
                alt="Abc Xyz"
                src={employee.profilePicture}
                sx={{ width: 56, height: 56 }}
            />
        </Box>
        <div style={datapageStyle.body}>
            <h1>Members and Admin's Page</h1>
            <Stack spacing={2}>
                <TextField id="outlined-basic" 
                           label="Patient's Name/Tracker number" 
                           variant="outlined" 
                           value={patientsinfo} 
                           onChange={(e) => setPatientInfo(e.target.value)}/>
                <TextField 
                           id="outlined-basic" 
                           label="Date" 
                           variant="outlined" 
                           value={date} 
                           onChange={(e) => setDate(e.target.value)}/>
                <TextField 
                           id="outlined-basic" 
                           label="Initially Bonded by" 
                           variant="outlined" 
                           value={initialBond} 
                           onChange={(e) => setInitialBond(e.target.value)}/>
                <TextField 
                           id="outlined-basic" 
                           label="Tooth number" 
                           variant="outlined" 
                           value ={toothNum} 
                           onChange={(e) => setToothNum(e.target.value)}/>
                <TextField 
                           id="outlined-basic" 
                           label="Rebonded by" 
                           variant="outlined" 
                           value={rebondBy} 
                           onChange={(e) => setRebondBy(e.target.value)}/>
                <TextField 
                           id="outlined-basic" 
                           label="Additional Comments" 
                           variant="outlined" 
                           value={addComment} 
                           onChange={(e) => setAddComment(e.target.value)}/>
            
            
            <Button type='submit'>Submit</Button>
            <Button variant="contained" onClick={onLoginClicked}>Log Out</Button>
            
            <Button variant="contained" onClick={onAdminClicked}>Admin Page</Button>
            </Stack>
        </div>
        </>
    )
}


export default DataInputPage