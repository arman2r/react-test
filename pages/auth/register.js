import React, { useState } from 'react'
import Layout from '../layout'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';

function register(props) {

    const [datos, setDatos] = useState({
        nombres: '',
        apellidos: '',
        correo: '',
        telefono: '',
        password: ''
    })

    const [valid, setValid] = useState(true);

    const handleInputChange = (event) => {
        // console.log('funciona');
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        });
        if ((datos.nombres.length && datos.apellidos.length && datos.correo.length && datos.telefono.length && datos.password.length) !== 0) {
            console.log('esta lleno');
            setValid(false);
        } else {
            console.log('faltan campos')
            setValid(true);
        }

    }

    const enviarDatos = async (event) => {
        event.preventDefault();
        // console.log(datos.nombre + ' ' + datos.apellidos);
        console.log(datos)
         
        try {
            const response = await axios.post('http://demo7871225.mockable.io/user', {datos});
            console.log(response);
        } catch (error) {
            setErrorRestaurants(error);
        } 
    }

    return (
        <Layout title="Register - user" description="Registro de nuevos usuarios">
            <CssBaseline />
            <Container maxWidth="lg">
                <Box sx={{ height: 'calc(100vh - 100px)' }}>
                    <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ height: 'calc(100vh - 100px)' }}>
                        <Grid item xs={10} sm={6} md={4}>
                            <form style={{ width: '100%' }} onSubmit={enviarDatos}>
                                <Grid container direction="column">
                                    <TextField fullWidth sx={{ mb: { xs: '10px' } }} name="nombres" required onChange={handleInputChange} id="outlined-basic" label="Nombres" variant="outlined" />
                                    <TextField fullWidth sx={{ mb: { xs: '10px' } }} name="apellidos" required onChange={handleInputChange} id="outlined-basic" label="Apellidos" variant="outlined" />
                                    <TextField fullWidth sx={{ mb: { xs: '10px' } }} type="email" required name="correo" onChange={handleInputChange} id="outlined-basic" label="Correo" variant="outlined" />
                                    <TextField fullWidth sx={{ mb: { xs: '10px' } }} type="tel" required pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" name="telefono" onChange={handleInputChange} id="outlined-basic" label="Teléfono" variant="outlined" />
                                    <TextField type="password" fullWidth sx={{ mb: { xs: '10px' } }} required onChange={handleInputChange} name="password" id="outlined-basic" label="Contraseña" variant="outlined" />
                                    <Button disabled={valid} variant="outlined" endIcon={<SendIcon />} onClick={enviarDatos}>Registrarme</Button>
                                </Grid>
                            </form>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Layout>
    )
}

export default register