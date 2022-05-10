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
import { useRouter } from 'next/router'

function login() {
  const router = useRouter()
  const [datos, setDatos] = useState({
    correo: '',
    password: ''
  })

  const [valid, setValid] = useState(true);

  const handleInputChange = (event) => {
    // console.log('funciona');
    setDatos({
      ...datos,
      [event.target.name]: event.target.value
    });
    if ((datos.correo.length && datos.password.length) !== 0) {
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
      const response = await axios.post('http://demo7871225.mockable.io/user?type=success', { datos });
      console.log(response);
      router.push('../dashboard')
    } catch (error) {
      setErrorRestaurants(error);
    }
  }
  return (
    <Layout title="Login - user" description="Login o panel requerido para el ingreso del usuario">

      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ height: 'calc(100vh - 100px)' }}>
          <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ height: 'calc(100vh - 100px)' }}>
            <Grid item xs={10} sm={6} md={4}>
              <form style={{ width: '100%' }} onSubmit={enviarDatos}>
                <Grid container direction="column">
                  <TextField fullWidth sx={{ mb: { xs: '10px' } }} type="email" required name="correo" onChange={handleInputChange} id="outlined-basic" label="Correo" variant="outlined" />
                  <TextField type="password" fullWidth sx={{ mb: { xs: '10px' } }} required onChange={handleInputChange} name="password" id="outlined-basic" label="Contraseña" variant="outlined" />
                  <Button disabled={valid} variant="outlined" endIcon={<SendIcon />} onClick={enviarDatos}>Ingresar</Button>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Box>
      </Container>

    </Layout>
  )
}

export default login