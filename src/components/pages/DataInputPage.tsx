import { Button, Stack, TextField, Box, Typography, Avatar, Container } from "@mui/material"
import { getEmployee, getAllUserRecords} from "../../utils/api";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Records from "./Record";


function DataInputPage() {

    const [currentEmployee, setCurrentEmployee] = useState(null);
    const [individualRecord, setIndividualRecord] = useState(null);
    const [filteredRecords, setFilteredRecords] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const employeeData = await getEmployee(100);
                const userRecords = await getAllUserRecords();
                setCurrentEmployee(employeeData);
                setIndividualRecord(userRecords);
                console.log('employee', employeeData);
                console.log('individualRecord', userRecords);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

 
    // const [patientsInfo, setPatientInfo] = useState('')
    // const [date, setDate] = useState('')
    // const [initialBond, setInitialBond] = useState('')
    // const [toothNum, setToothNum] = useState('')
    // const [rebondBy, setRebondBy] = useState('')
    // const [addComment, setAddComment] = useState('')
    // const [showForm, setShowForm] = useState(false);
    // const navigate = useNavigate();
    
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Handle form submission logic here, e.g., sending data to an API.
    //     console.log({
    //       patientsInfo,
    //       date,
    //       initialBond,
    //       toothNum,
    //       rebondBy,
    //       addComment
    //     });
    //   };
    
    //   const handleShowForm = () => {
    //     setShowForm(true);
    //   };

    const onLoginClicked = () => {
        console.log('Logged Out!')
        // navigate('/')
    }
    // const onAdminClicked = () => {
       
    //     navigate('/report')
    // }
   
    // const datapageStyle = {
    //     body: {
    //         margin: 0,
    //         width: '100%',
    //         height: '100vh',
    //         display: 'flex',
    //         flexDirection: 'column',
    //         alignItems: 'center',
    //         justifyContent: 'center',
    //     }
       
    // }

    if (!currentEmployee || !individualRecord) {
        return <div>Loading...</div>;
    }

    const handleSearch = (query) => {
        console.log('query', query);
        if (query === '') {
            setFilteredRecords(individualRecord);
        } else {
            const filtered = individualRecord.filter(record => {
                console.log('record', record)
                return record.trackerNumber.toString().includes(query)
            }
            );
            setFilteredRecords(filtered);
        }
    };
      
console.log('individualRecord', individualRecord) 
    return (
        <>
        <NavBar onSearch={handleSearch} />
        <Box>
            <Stack direction ="row" spacing={2} justifyContent="space-between" >
            <SideBar />
            <Typography variant="h6"  bgcolor="pink" flex={2} p={2}>
                {currentEmployee.name}
            </Typography>
            <Avatar 
                alt="Abc Xyz"
                src={currentEmployee.profilePicture}
                sx={{ width: 56, height: 56 }}
            />
            </Stack>
        </Box>
        <Stack spacing={2}>
        {filteredRecords.map((item) => (
                <Records
                patientName ={item.patientName}
                trackerNumber={item.trackerNumber}
                initiallyBondedBy={item.initiallyBondedBy}
                initialBondingDate={item.initialBondingDate}
                rebondedToothNo={item.rebondedToothNo}
                rebondingDate={item.rebondingDate}
                additionalComment={item.additionalComment}
                />

            ))}
            </Stack>
       {/* </Stack> 
        <div style={datapageStyle.body}>
            <h1>Members and Admin's Page</h1>
            {!showForm && (
        <Button variant="contained" onClick={handleShowForm}>
          Show Form
        </Button>
      )}
       */}
            {/* <Stack spacing={2}>
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
            
            
            <Button type='submit'>Submit</Button> */}
            {/* <Stack spacing={2}>
            {showForm && (
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField 
              id="outlined-basic" 
              label="Patient's Name/Tracker number" 
              variant="outlined" 
              value={patientsInfo} 
              onChange={(e) => setPatientInfo(e.target.value)} 
            />
            <TextField 
              id="outlined-basic" 
              label="Date" 
              variant="outlined" 
              value={date} 
              onChange={(e) => setDate(e.target.value)} 
            />
            <TextField 
              id="outlined-basic" 
              label="Initially Bonded by" 
              variant="outlined" 
              value={initialBond} 
              onChange={(e) => setInitialBond(e.target.value)} 
            />
            <TextField 
              id="outlined-basic" 
              label="Tooth number" 
              variant="outlined" 
              value={toothNum} 
              onChange={(e) => setToothNum(e.target.value)} 
            />
            <TextField 
              id="outlined-basic" 
              label="Rebonded by" 
              variant="outlined" 
              value={rebondBy} 
              onChange={(e) => setRebondBy(e.target.value)} 
            />
            <TextField 
              id="outlined-basic" 
              label="Additional Comments" 
              variant="outlined" 
              value={addComment} 
              onChange={(e) => setAddComment(e.target.value)} 
            />
            <Button type='submit'>Submit</Button>
          </Stack>
        </form>
      )} */}
      <Stack spacing={2}>
          <Button variant="contained" onClick={onLoginClicked}>Log Out</Button>
          {/* <Button variant="contained" onClick={onAdminClicked}>Admin Page</Button> */}
          </Stack>  
            
        {/* </div> */}
        </>
    )
}


export default DataInputPage