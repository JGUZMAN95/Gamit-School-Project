import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from './Footer';
import { FaCentercode } from 'react-icons/fa';

const theme = createTheme(
);

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };

  return (
    <div>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="0" alignItems = 'center'>
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
          }}
        >
          <Typography component="h1" variant="h5">
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2} >
              <Grid item xs={12} sm={'auto'} sx={25}>
              <h1>Contact Us</h1>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  id="firstName"
                  label="First Name"
                  style = {{width: 'auto'}}

                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  style = {{width: 'auto'}}
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  style = {{width: 'auto'}}
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  style = {{width: 'auto'}}
                  name="Detail Message"
                  label="Detail Message..."

                />
              </Grid>
            </Grid>
            <Grid >
            <Button
              type="submit"
              style = {{width: 'auto',height: 'auto'}}
              variant="contained"
              sx={{ mt: 3, mb: 3, alignItems:'center' }}
            >
             SUBMIT MESSAGE
            </Button>
            </Grid>
            <Grid container justifyContent="revert">
            <div>
            <div
     style={{
       display: 'revert',
       textAlign: 'center',
       width:'100vw',
       margin: -25
  }}><f1>
    <Footer/>
  </f1>
     
     </div>
          </div>
              <Grid item>
                
              </Grid>
            </Grid>
            
          </Box>
  
        </Box>
        
      </Container>
    
    </ThemeProvider>
    </div>
    
    
  );
}