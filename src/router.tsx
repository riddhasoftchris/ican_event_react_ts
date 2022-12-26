//import component
import Facility from './pages/facilities/Facility';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';

//mui section
import {Box} from '@mui/material'

// react router
import { Route , Routes } from "react-router-dom";
import Check_In_Out from './pages/ClientSide/Check_In_Out';







const Router = () =>{
    return(
        <Box sx={{padding: "40px 20px 10px 20px"}}>
            <Routes>
                <Route path='/' element={<Dashboard/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
                <Route path='customers' element={<Facility/>}/>
                
            </Routes>
        </Box>
    )
}

export default Router