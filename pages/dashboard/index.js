import Layout from '../layout'
import Box from '@mui/material/Box';

function index() {
  return (
    <Layout title="Dasboard - user" description="Dashboard o panel informativo del usuario ingresado">
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 2, pt: 0 }}>
        <h1>Dashboard</h1>
        <p>Bienvenido al panel de administración para los usuarios registrados</p>
      </Box>
    </Layout>
  )
}

export default index