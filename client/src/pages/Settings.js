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
import MultilineTextFields from '../components/common/TextBox/index'
import DashboardIcon from '@material-ui/icons/Dashboard';
import '../components/common/Modal/index.css';
import FormControl from '@material-ui/core/FormControl';
import Auth from '../utils/Auth'
import API from '../utils/API'
import Alert from '@material-ui/lab/Alert'
import TextField from '@material-ui/core/TextField';

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
    const [user, setUser] = useState({})
    const [feedBack, setFeedBack] = useState(false)
    const [feed, setFeed] = useState('')
    const [myAccount, setMyAccount] = useState(false)
    const [resetPassword, setResetPassword] = useState(false)
    const [help, setHelp] = useState(false)
    const [success, setSuccess] = useState(false)
    const [adminPass, setAdminPass] = useState('')
    const [admin, setAdmin] = useState(false)
    const [returnFeed, setReturnFeed] = ([])
    let history = useHistory();
    const classes = useStyles();


    useEffect(() => {
        API.dashboard(Auth.getToken())
            .then(res => {
                setUser(res.data.user)
                // setUserId(res.data.user._id)
                // console.log(res.data.user.name)
                // console.log(history.location.pathname)
                // console.log(res.data.user)

            })
    }, [])

    const everyThingFalse = () => {
        setFeedBack(false)
        setHelp(false)
        setResetPassword(false)
        setMyAccount(false)
        setSuccess(false)
        setFeed('')
        setAdmin(false)


    }

    const clear = () => {
        // setFeedBack(false)
        setSuccess(false)
        // setFeed('')
        // setFeedBack(true)


    }

    const processGetFeedBack = (e) => {
        e.preventDefault()
        console.log(adminPass)
        API.getFeed(adminPass)
            .then(res => {
                setReturnFeed(res)
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const processFeedBack = () => {
        const feedBackData = {
            user: user._id,
            feedback: feed
        }
        console.log(feedBackData)
        API.sendFeed(feedBackData)
            .then(res => {
                console.log(res)
                setFeed('')
                setFeedBack(false)
                setFeedBack(true)
                setSuccess(true)

                setTimeout(clear, 3000)
                // setTimeout


            })
            .catch(err => {
                console.log(err)
            })


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
            <ButtonAppBar logout={logout} dash={dash} />
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

                            




                            {/* <Grid item xs={7} sm={7} md={7} id="test">
                                <div id="simpleModalText">
                                    <SimpleModal

                                        buttonName={'Admin'}
                                        fullWidth
                                        variant="contained"
                                        color="secondary"
                                        modalTitle={'Password'}
                                        onClose={() => console.log(adminPass)}
                                        modalContent={<BasicTextFields labelContent={'Password'} setAdminPass={setAdminPass}
                                        />
                                        } />
                                </div>

                            </Grid> */}

                            <Grid item xs={7} sm={7} md={7}>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    color="secondary"
                                    onClick={() => {
                                        everyThingFalse()
                                        setAdmin(true)
                                    }}
                                    className={classes.submit}
                                >
                                    Admin
                </Button>
                            </Grid>

                            <Grid item xs={7} sm={7} md={7} id="test">
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
                        admin
                            ? <Container>
                                <SimpleCard
                                    cardTitle={'Admin'}
                                    h={"h4"}
                                    cardBody={'Enter the password of passwords!'}>
                                    <form
                                        onSubmit={processGetFeedBack}
                                        className={classes.form}>
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="password"
                                            label="Password"
                                            onChange={(event) => { setAdminPass(event.target.value) }}
                                            // errorText={error.password}
                                            type="password"
                                            id="password"
                                        // autoComplete="current-password"
                                        />
                                        {/* <BasicTextFields labelContent={'Password'} setAdminPass={setAdminPass}
                                        /> */}
                                        <Grid item xs={7} sm={7} md={7}>

                                            {/* <Button
                                                fullWidth
                                                type='submit'
                                                variant="contained"
                                                color="secondary"
                                                className={classes.submit}>
                                                Submit
                                            </Button> */}

                                        </Grid>
                                    </form>
                                </SimpleCard>


                            </Container>
                            : null
                    }
                    {
                        feedBack
                            ? <Container> <SimpleCard
                                cardTitle={'Feedback'}
                                h={"h4"}
                                cardBody={'Please give us feedback, so we may improve your game experience!'}>

                                <MultilineTextFields
                                    TextFieldLabel={''} setFeed={setFeed} />
                                <Grid item xs={7} sm={7} md={7}>

                                    <Button
                                        fullWidth
                                        variant="contained"
                                        color="secondary"
                                        onClick={() => {
                                            if (feed !== '') {
                                                // console.log(event.target)
                                                processFeedBack()
                                            }
                                        }}
                                        className={classes.submit}
                                    >
                                        Submit
                                    </Button>
                                    {
                                        success
                                            ? <Alert severity='success'>{`Thank you for you feedback, ${user.name}!`}</Alert>
                                            : null
                                    }
                                </Grid>
                            </SimpleCard>


                            </Container>
                            : null
                    }
                    {
                        myAccount
                            ? <Container><SimpleCard
                                cardTitle={'My Account'}
                                h={"h4"}
                                cardBody={'This is where we will update the users account information'} />
                            </Container>
                            : null

                    }
                    {
                        resetPassword
                            ? <Container><SimpleCard
                                cardTitle={'Reset Password'}
                                h={"h4"}
                                cardBody={'This is where we will be able to reset a password.'} />
                            </Container>
                            : null

                    }
                    {
                        help
                            ? <Container><SimpleCard
                                cardTitle={'Help and Support'}
                                h={"h4"}
                                cardBody={'This is where we will give help and support information.'} />
                            </Container>
                            : null

                    }
                    {/* {
                        admin
                            ? returnFeed.map(f => {
                                <Container><SimpleCard
                                    cardTitle={'My Account'}
                                    h={"h4"}
                                    cardBody={'This is where we will update the users account information'} />
                                </Container>
                            })
                            : null

                    } */}

                </Grid>

            </Grid>
            {/* <Box mt={5}>
                <Copyright />
            </Box> */}
        </ThemeProvider >
    );
}

export default Settings;