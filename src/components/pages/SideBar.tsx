import { Box } from "@mui/material"
import PatientForm from "../PatientForm"

const SideBar = () => {
    return (
    <Box bgcolor="lightblue" flex={1} p={2} sx={{display:{ xs : 'none', sm: 'block'}}}>
    <PatientForm/>
    </Box>
    )
    
}

export default SideBar