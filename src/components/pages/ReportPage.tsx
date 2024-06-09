import { useState } from "react";
import React from "react";

import records from "../../../data/records.json";
import Records from "./Record";
import { styled } from '@mui/material/styles';
import { Button , Stack } from "@mui/material";
import { useNavigate } from 'react-router-dom'




function ReportPage() {
    const navigate = useNavigate();
    const onLoginClicked = () => {
        console.log('Logged Out!')
        navigate('/')
    }

    const LogOutButton = styled(Button)(() => ({
        color: 'white',
        backgroundColor: 'peruvianblue',
        '&:hover': {
          backgroundColor: 'lightblue',
        },
        width: '10em',
        'margin-right': 0,
      }));
      const Container = styled('div')({
        position: 'relative',
    });

    const ButtonContainer = styled('div')({
        position: 'absolute',
        top: 0,
        right: 0,
        margin: '1em',
    });

    return (
    <Container>
        <ButtonContainer>
        <LogOutButton variant="contained"  onClick={onLoginClicked}>Log Out</LogOutButton>
        </ButtonContainer>
    <Stack spacing={2}>
        {records.map((item) => (
                <Records
                patientName ={item.patientName}
                trackerNumber={item.trackerNumber}
                initiallyBondedBy={item.initiallyBondedBy}
                initialBondingDate={item.initialBondingDate}
                rebondedToothNo={item.rebondedToothNo}
                rebondedBy={item.rebondedBy}
                rebondingDate={item.rebondingDate}
                additionalComment={item.additionalComment}
                />

            ))}
       </Stack> 
    </Container>

    )
}

export default ReportPage 