import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import {NavLink} from 'react-router-dom';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <NavLink to = "/Landing" exact>
        Poison Picker
      </NavLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
function LogIn() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Already have an account? '} 
      <NavLink to = "/Login" exact>
        Log In
      </NavLink>
    </Typography>
  );
}



const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    
    },
  },
  
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#FCD561',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  return (
    <Container className="main" component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h2" variant="h5">
          Sign Up
        </Typography>
        <form className={classes.form} noValidate>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="Name"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="last name"
            label="Last Name"
            name="last name"
            autoComplete="last name"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="phone number"
            label="Phone Number"
            name="phone number"
            autoComplete="phone number"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            color= 'primary'
            className={classes.submit}
          >
            Sign Up
          </Button>
        </form>
      </div>
      <Box mt={2}>
        <LogIn />
      </Box>
      <Box mt={4}>
        <Copyright />
      </Box>
    </Container>
  );
}