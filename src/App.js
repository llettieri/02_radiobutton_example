import './App.css';
import {
    Box,
    Button,
    Container,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    Input,
    InputLabel,
    Radio,
    RadioGroup
} from "@mui/material";
import {useState} from "react";

function App() {
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');

    return (
        <Container>
            <Box display='flex' justifyContent='center' alignItems='center'>
                <Grid
                    container
                    justifyContent='center'
                    spacing={2}
                    maxWidth={500}
                    mt={5}
                >
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <InputLabel>First Name</InputLabel>
                            <Input required id='fName' onChange={e => setFName(e.target.value)}/>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <InputLabel>Last Name</InputLabel>
                            <Input required id='lName' onChange={e => setLName(e.target.value)}/>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <InputLabel>E-Mail</InputLabel>
                            <Input required id='email' onChange={e => setEmail(e.target.value)}/>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6} mt={5}>
                        <FormControl>
                            <FormLabel>Gender</FormLabel>
                            <RadioGroup defaultValue='other' onChange={e => setGender(e.target.value)}>
                                <FormControlLabel value='male' control={<Radio/>} label='Male'/>
                                <FormControlLabel value='female' control={<Radio/>} label='Female'/>
                                <FormControlLabel value='other' control={<Radio/>} label='Other'/>
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6} alignSelf='center'>
                        <Button variant='contained' onClick={printInfos}>Submit</Button>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );

    function printInfos() {
        if (fName !== '' && lName !== '' && email !== '') {
            console.log(fName, lName, email, gender);
        } else {
            alert('Please fill in all Required fields!')
        }
    }
}

export default App;
