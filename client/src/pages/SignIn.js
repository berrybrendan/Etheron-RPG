import React, {useState, useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import {  useHistory } from "react-router-dom";
// import { BrowserRouter as Router, Route, Switch, Redirect, useHistory } from "react-router-dom";

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
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



function SignIn(props) {
  let history = useHistory();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState({})
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
  },[])

  const processForm = (event) => {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();
    const user = {
      email: email,
      password: password
    }
    console.log(email, password)
    console.log(user)
  
    // create a string for an HTTP body message
    //const { email, password } = this.state.user;
  
    API.login({email:email, password: password}).then(res => {
        // save the token
        Auth.authenticateUser(res.data.token);
        console.log(res)
        // props.user(email);
        props.toggleAuthStatus()
        history.push("/dashboard")
        // props.history.push('/dashboard');
        
    })
    // .catch(( {response} ) => {
  
    //     const errors = response.data.errors ? response.data.errors : {};
    //     errors.summary = response.data.message;
  
    //     setError({
    //       errors
    //     });
    //   });
    
  }

  return (
    <ThemeProvider theme={ theme }>
        <Grid container component="main" className={classes.root} >
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <form 
            onSubmit={processForm} 
            errors={error}
            // successMessage = {successMessage}
            className={classes.form} 

            noValidate>
                <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                onChange={(event) => {setEmail(event.target.value)}}
                // errorText={error.email}
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                />
                <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                onChange={(event) => {setPassword(event.target.value)}}
                // errorText={error.password}
                type="password"
                id="password"
                autoComplete="current-password"
                />
                <FormControlLabel
                control={<Checkbox value="remember" color="secondary" />}
                label="Remember me"
                />
                <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
                >
                Sign In
                </Button>
                <Grid container>
                <Grid item xs>
                    <Link href="#" variant="body2">
                    Forgot password?
                    </Link>
                </Grid>
                <Grid item>
                    <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                    </Link>
                </Grid>
                </Grid>
                <Box mt={5}>
                <Copyright />
                </Box>
            </form>
            </div>
        </Grid>
        </Grid>
    </ThemeProvider>
  );
}

export default SignIn;