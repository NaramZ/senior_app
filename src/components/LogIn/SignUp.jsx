import React, {useState} from 'react';
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
import SignUpServices from '../Services/SingUpServices'


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
function LogInLink() {
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

  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
const handleSignUp = (event) =>{
  event.preventDefault()
  console.log("name", name)
  console.log("last name", lastName)
  console.log("email", email)
  console.log("password", password)
  console.log("phone number", phoneNumber)
  const signUpObject = {
    name : name,
    lastName : lastName,
    phone: phoneNumber,
    email: email,
    password: password,
    favorites: []
  }
  SignUpServices
  .createUser(signUpObject)
  .then (returnedObject => {
    console.log("Sign up succ", returnedObject)
  })
}

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
        <form className={classes.form} onSubmit={handleSignUp}>
          <TextField
            onChange = {(event) => setName(event.target.value)}
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
            onChange = {(event) => setLastName(event.target.value)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="last name"
            autoComplete="last name"
          />
          <TextField
            onChange = {(event) => setPhoneNumber(event.target.value)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="phoneNumber"
            label="Phone Number"
            name="phone number"
            autoComplete="phone number"
            
          />
          <TextField
            onChange = {(event) => setEmail(event.target.value)}
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
            onChange = {(event) => setPassword(event.target.value)}
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
            color= 'primary'
            fullWidth
            variant="outlined"
            className={classes.submit}
          >
            Sign Up
          </Button>
        </form>
      </div>
      <Box mt={2}>
        <LogInLink/>
      </Box>
      <Box mt={4}>
        <Copyright />
      </Box>
    </Container>
  );
}