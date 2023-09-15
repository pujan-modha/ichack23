import { Box, styled } from "@mui/material";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { RegisterData } from "../assets/RegisterData";
import CustomButton from "../components/CustomButton";



const Register = () => {

    const [reg, setReg] = useState('');

    const handleChange = (event) => {
        setReg(event.target.value);
    };

    const Submit=styled(Box)(()=>({
        marginTop: "5%",
    }))
    

    return (
        <>
            <Box backgroundColor="#e3ebfa" width="100%" height="100vh">
                <Navbar />
                <Box alignContent="center" alignItems="center" justifyContent="center" margin="10% 20% 0 20%">
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Select Section</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={reg}
                            label="Select Section"
                            onChange={handleChange}
                        >
                            {RegisterData.map((RegData, index) => (
                                <MenuItem value={RegData.value}>{RegData.data}</MenuItem>
                            ))
                            }
                        </Select>
                    </FormControl>
                    <Submit  margin-top="20px">
                        <a href={reg}>
                            <CustomButton backgroundColor="#0F1B4C" color="#fff" buttonText="Submit" />
                        </a>
                    </Submit>
                </Box>
            </Box>
        </>
    );
}

export default Register;
