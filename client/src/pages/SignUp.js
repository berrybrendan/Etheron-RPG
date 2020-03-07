import React, {useEffect, useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {  useHistory } from "react-router-dom";

import theme from '../utils/themeUtil';
import Button from '../components/common/Button/index'

import Auth from '../utils/Auth'
import API from '../utils/API'

function Copyright() {
  return (
    <ThemeProvider theme={ theme }>
        <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="http://etheron-rpg.herokuapp.com/">
            Etheron RPG
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
        </Typography>
    </ThemeProvider>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignUp(props) {
  let history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  // const [error, setError] = useState({})
  const [successMessage, setSuccessMessage] = useState('')
  const classes = useStyles();


  useEffect(() => {
    const storedMessage = localStorage.getItem('successMessage');
    let successMessage = '';

    if (storedMessage) {
      successMessage = storedMessage;
      localStorage.removeItem('successMessage');
    }
    setSuccessMessage(successMessage)
    //this.setState({ successMessage });
  })

  const processForm = (event) => {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();
    const user = {
      email: email,
      password: password,
      name: name
    }
    console.log(email, password, name)
    console.log(user)
  
    // create a string for an HTTP body message
    //const { email, password } = this.state.user;
  
    API.signUp({email:email, password: password, name: name}).then(res => {

      localStorage.setItem('successMessage', res.data.message);
      API.login({email:email, password: password}).then(res => {
        // save the token
        Auth.authenticateUser(res.data.token);
        console.log(res)
        // props.user(email);
        props.toggleAuthStatus()
        history.push("/dashboard")
        // props.history.push('/dashboard');
        
    })

        // redirect user after sign up to login page
        // props.history.push('/');
        
    })
    .catch(( res ) => {
      console.log(res)
        // const errors = response.data.errors ? response.data.errors : {};
        // errors.summary = response.data.message;
  
        // setError({
        //   errors
        // });
      });
    
  }



  // const classes = useStyles();

  return (
    <ThemeProvider theme={ theme }>
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
            Sign up
            </Typography>
            <form className={classes.form} onSubmit={processForm} noValidate>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                <TextField
                    autoComplete="fname"
                    name="userName"
                    variant="outlined"
                    required
                    fullWidth
                    id="userName"
                    label="Username"
                    onChange={(event) => {setName(event.target.value)}}
                    autoFocus
                />
                </Grid>
                {/* <Grid item xs={12} sm={6}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lname"
                />
                </Grid> */}
                <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    onChange={(event) => {setEmail(event.target.value)}}
                    name="email"
                    autoComplete="email"
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    onChange={(event) => {setPassword(event.target.value)}}
                    id="password"
                    autoComplete="current-password"
                />
                </Grid>
            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
            >
                Sign Up
            </Button>
            <Grid container justify="flex-end">
                <Grid item>
                <Link href="/" variant="body2"> 
                    Already have an account? Sign in
                </Link>
                </Grid>
            </Grid>
            </form>
        </div>
        <Box mt={5}>
            <Copyright />
        </Box>
        </Container>
    </ThemeProvider>
  );
}

export default SignUp;