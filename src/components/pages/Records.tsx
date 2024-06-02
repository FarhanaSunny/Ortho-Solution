// @ts-ignore
import React from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
// @ts-ignore
function Records (props) {
    const style = {
        name: {
            color: 'red',
            margin: '10px',
            fontSize: 20
        }
    }
    return (
       <>
       <Container fixed>
            <Box sx={{ bgcolor: '#cfe8fc', borderRadius: 10}}>
        <p style={style.name}>Patient Name: {props.patientName}</p>
       <p>Tracker Number: {props.trackerNumber}</p>
       <p>Initially BondedBy: {props.initiallyBondedBy}</p>
       <p>Initial Bonding Date: {props.initiallyBondedBy}</p>
       <p>Rebonded Tooth Number: {props.rebondedToothNo}</p>
       <p>Rebonded By: {props.rebondedBy}</p>
       <p>Rebonding Date: {props.rebondingDate}</p>
       <p>Additional Comment: {props.additionalComment}</p>
       </Box>
       </Container>
       </>

    )

}

export default Records 