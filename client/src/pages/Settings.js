import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import theme from '../utils/themeUtil';
import Button from '../components/common/Button/index'
import SimpleModal from '../components/common/Modal/index'
import ButtonAppBar from '../components/common/AppBar/index'
import SimpleCard from '../components/common/Card/index'
import BasicTextFields from '../components/common/Input/index'
import DashboardIcon from '@material-ui/icons/Dashboard';

import Auth from '../utils/Auth'

const AntSwitch = withStyles(theme => ({
    root: {
        width: 28,
        height: 16,
        padding: 0,
        display: 'flex',
    },
    switchBase: {
        padding: 2,
        color: theme.palette.grey[500],
        '&$checked': {
            transform: 'translateX(12px)',
            color: theme.palette.common.white,
            '& + $track': {
                opacity: 1,
                backgroundColor: theme.palette.primary.main,
                borderColor: theme.palette.primary.main,
            },
        },
    },
    thumb: {
        width: 12,
        height: 12,
        boxShadow: 'none',
    },
    track: {
        border: `1px solid ${theme.palette.grey[500]}`,
        borderRadius: 16 / 2,
        opacity: 1,
        backgroundColor: theme.palette.common.white,
    },
    checked: {},
}))(Switch);


function Copyright() {
    return (
        <ThemeProvider theme={theme}>
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

function Settings(props) {
    const [state, setState] = useState({
        checkedA: true,
        checkedB: true,
        checkedC: true,
    });
    const [feedBack, setFeedBack] = useState(false)
    const [myAccount, setMyAccount] = useState(false)
    const [resetPassword, setResetPassword] = useState(false)
    const [help, setHelp] = useState(false)
    let history = useHistory();
    const classes = useStyles();
    const number = [5, 6, 7, 8, 9];
    const character = {
        name: 'Bill',
        type: 'Warrior',
        gold: '3000'

    }

    const everyThingFalse = () => {
        setFeedBack(false)
        setHelp(false)
        setResetPassword(false)
        setMyAccount(false)


    }

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
    };

    const logout = () => {

        Auth.deauthenticateUser();
        props.toggleAuthStatus()

        history.push("/")

    }
    const dash = () => {
        history.push("/dashboard")
      }



    return (
        <ThemeProvider theme={theme}>
            <ButtonAppBar logout={logout} dash = {dash}/>
            <Grid container component="main" className={classes.root} spacing={3} >
                <CssBaseline />


                {/* Start of Left Side */}
                <Grid item xs={12} sm={12} md={5} >
                    <Container>
                        <Grid container spacing={2}>
                            <Grid item xs={7} sm={7} md={7}>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    color="secondary"
                                    onClick={() => {
                                        everyThingFalse()
                                        setMyAccount(true)
                                    }}
                                    className={classes.submit}
                                >
                                    My Account
                </Button>
                            </Grid>

                            <Grid item xs={7} sm={7} md={7}>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    color="secondary"
                                    onClick={() => {
                                        everyThingFalse()
                                        setResetPassword(true)
                                    }}
                                    className={classes.submit}
                                >
                                    Reset Password
                </Button>
                            </Grid>

                            <Grid item xs={7} sm={7} md={7}>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    color="secondary"
                                    onClick={() => {
                                        everyThingFalse()
                                        setHelp(true)
                                    }}
                                    className={classes.submit}
                                >
                                    Help and Support
                </Button>
                            </Grid>

                            <Grid item xs={7} sm={7} md={7}>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    color="secondary"
                                    onClick={() => {
                                        everyThingFalse()
                                        setFeedBack(true)
                                    }}
                                    className={classes.submit}
                                >
                                    Give us Feedback
                </Button>
                            </Grid>
                            <Grid xs={7} sm={7} md={7}>
                                <Typography component="div">
                                    <Grid component="label" container alignItems="center" spacing={1}>
                                        <Grid item id="ant">Notifications</Grid>
                                        <Grid item>
                                            <AntSwitch
                                                
                                                checked={state.checkedC}
                                                onChange={handleChange('checkedC')}
                                                value="checkedC"
                                            />
                                        </Grid>
                                        {/* <Grid item>On</Grid> */}
                                    </Grid>
                                </Typography>
                            </Grid>

                            {/* <Grid item xs={5} sm={5} md={5}>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    color="secondary"
                                    className={classes.submit}
                                >
                                    Delete
                </Button>
    </Grid>  */}
                            {/* </Grid>
                        <Selector number={number} />
                        <Grid container spacing={2}>
                            <Grid item xs={8} sm={8} md={8}>

                            </Grid>
                            <Grid item xs={4} sm={4} md={4}>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    color="secondary"
                                    className={classes.submit}
                                >
                                    Start
                </Button>
                            </Grid> */}


                            <Grid item xs={7} sm={7} md={7}  id="test">
                                <div id="simpleModalText"> 
                                <SimpleModal 
                                    
                                    buttonName={'ABOUT US'}
                                    fullWidth
                                    variant="contained"
                                    color="secondary"
                                    modalTitle={'The Badass GameMakers'}
                                    modalContent={'We met a long time ago in a far away place,and we have been thrashing monsters and demons ever since.'} />

                                </div>
                                
                            </Grid>





                        </Grid>
                    </Container>
                </Grid>


                {/* Start of Right Side */}
                <Grid item xs={12} sm={12} md={7} >
                    {
                        feedBack
                            ?  <Container> <SimpleCard
                            cardTitle = {'Feedback'}
                            h={"h4"}
                            cardBody={'This is where the user will be able to give feedback.'}><BasicTextFields /></SimpleCard>
                            
                            
                            </Container>
                            : null
                    }
                    {
                        myAccount
                            ? <Container><SimpleCard 
                            cardTitle = {'My Account'}
                            h={"h4"}
                            cardBody={'This is where we will update the users account information'} />
                            </Container>
                            : null

                    }
                    {
                        resetPassword
                            ? <Container><SimpleCard 
                            cardTitle = {'Reset Password'} 
                            h={"h4"}
                            cardBody={'This is where we will be able to reset a password.'}/>
                            </Container>
                            : null

                    }
                    {
                        help
                            ? <Container><SimpleCard 
                            cardTitle = {'Help and Support'}
                            h={"h4"} 
                            cardBody={'This is where we will give help and support information.'}/>
                            </Container>
                            : null

                    }

                </Grid>

            </Grid>
            {/* <Box mt={5}>
                <Copyright />
            </Box> */}
        </ThemeProvider >
    );
}

export default Settings;