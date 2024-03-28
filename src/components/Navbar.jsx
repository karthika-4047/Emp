import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:"#459C98"}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Employee Dashboard
          </Typography>
          <Button  variant='contained' color="secondary" sx={{ mr: 2 }} ><Link to={'/'} style={{textDecoration:"none", color:"white"}}>Home</Link></Button>
          <Button  variant='contained' color="secondary" ><Link to={'/add'} style={{textDecoration:"none", color:"white"}}>Employee Form</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar
