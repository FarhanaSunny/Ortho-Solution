// @ts-ignore
import React from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


// @ts-ignore
function Records (props) {
    const style = {
        name: {
            // color: 'red',
            fontSize: 25
        },
        patientInfo: {
            // backgroundColor: 'green',
            diplay: 'block',
            margin: '1rem',
        },
        bondingInfo: {
            columnGap: '40px',
            // marginLeft: '10em',
            display: 'inline-block'
        }
    }
    return (
  <>
    <Container fixed> 
        <Box sx={{ bgcolor: '#cfe8fc', borderRadius: 10, margin: '1rem', display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
            <div style={style.patientInfo}>
                <p style={style.name}>Patient Name: {props.patientName}</p>
                <p>Tracker Number: {props.trackerNumber}</p>
            </div>
            <div style={style.bondingInfo}>
                <div>
            <p>Initially Bonded By: {props.initiallyBondedBy}</p>
            <p>Initial Bonding Date: {props.initialBondingDate}</p>
            </div>
            <p>Rebonded Tooth Number: {props.rebondedToothNo}</p>
            {props.rebondedBy && <p>Rebonded By: {props.rebondedBy}</p>}
            <p>Rebonding Date: {props.rebondingDate}</p>
            <p>Additional Comment: {props.additionalComment}</p>
            </div>
       </Box>
     </Container> 
    </>

    )

}

export default Records 