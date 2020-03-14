import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import theme from '../utils/themeUtil';
import Button from '../components/common/Button/index'
import ButtonAppBar from '../components/common/AppBar/index'
import Selector from '../components/common/Selector/index'
import SimpleCard from '../components/common/Card/index'
import SimpleModal from '../components/common/Modal/index'
import Auth from '../utils/Auth'
import API from '../utils/API'

// const userDB = require('../../../server/controllers/usersController')
// const characterDB = require('../../../server/controllers/charactersController')

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

function Dashboard(props) {
  let history = useHistory();
  const classes = useStyles();
  const number = [5, 6, 7, 8, 9];
  const [userId, setUserId] = useState('')
  const [username, setUsername] = useState('')
  const [characters, setCharacters] = useState([])
  const [charac, setCharac] = useState({})
  const character = {
    name: 'Bill',
    type: 'Warrior',
    gold: '3000'

  }

  const logout = () => {

    Auth.deauthenticateUser();
    props.toggleAuthStatus()

    history.push("/")

  }

  useEffect(() => {
    API.dashboard(Auth.getToken())
      .then(res => {
        setUsername(res.data.user.name)
        setUserId(res.data.user._id)
        console.log(history.location.pathname)
        // console.log(res.data.user)
        API.getCharacters(res.data.user._id)
          .then(charRes => {
            console.log(charRes.data.characters)
            setCharacters(charRes.data.characters)
          })
      })
  }, [])


  // test
  const createCharacter = () => {
    console.log('clicked')
    const token = Auth.getToken()
    const wCharacter = {
      // headers: {
      //   Authorization: `bearer ${token}`
      // },
      name: "Rowdy Alvin",
      type: "Wizard",
      silver: 78,
      stats: {
        level: 7,
        maxhealth: 30,
        currenthealth: 27,
        strength: 14,
        intel: 17,
        speed: 12,
        defense: 9
      },
      user: userId
    }
    console.log(wCharacter)
    API.createCharacter(wCharacter)
    .then(res => {
      console.log("success")
      history.push('/')
    })
  }

  const gameStart = (player) => {
    history.push("/etheron")
  }

  const settings = () => {
    history.push("/settings")
  }

  return (
    <ThemeProvider theme={theme}>
      <ButtonAppBar logout={logout} settings={settings} />
      <Container>
        <Typography variant="body2" color="textSecondary" align="center">
          <h2>{`Welcome back, ${username}`}</h2>
        </Typography>

      </Container>
      <Grid container component="main" className={classes.root} spacing={3} >
        <CssBaseline />

        {/* <Grid item xs={12} sm={12} md={12}>
          <Container>
            <Typography variant="body2" color="textSecondary" align="center">
              <h2>{`Welcome back, ${username}`}</h2>
            </Typography>

          </Container>
        </Grid> */}

        {/* Start of Left Side */}
        <Grid item xs={12} sm={12} md={6} >
          <Container>
            <Grid container spacing={2}>
              <Grid item xs={7} sm={7} md={7}>
                {/* <SimpleModal
                buttonName={'New Character'}
                modalTitle={'Create a new adventurer'}
                modalContent={}>
                </ SimpleModal> */}

                <Button
                  fullWidth
                  variant="contained"
                  color="secondary"
                  className={classes.submit}
                  onClick={ createCharacter }
                >
                  New Character
                </Button>
              </Grid>
              <Grid item xs={5} sm={5} md={5}>
                <Button
                  fullWidth
                  variant="contained"
                  color="secondary"
                  className={classes.submit}
                >
                  Delete
                </Button>
              </Grid>
            </Grid>
            <Selector chars={characters} choose={setCharac} />
            <Grid container spacing={2}>
              <Grid item xs={8} sm={8} md={8}>

              </Grid>
              <Grid item xs={4} sm={4} md={4}>
                <Button
                  fullWidth
                  variant="contained"
                  color="secondary"
                  className={classes.submit}
                  onClick={() => {gameStart("1")}}
                >
                  Start
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Grid>


        {/* Start of Right Side */}
        <Grid item xs={12} sm={12} md={6} >
          <Container>
          <SimpleCard character={character} cardTitle={charac.name} cardHeader={charac.type ?charac.type :"hello"} />
          </Container>
          {/*   const cardTitle = props.cardTitle
  const cardHeader= props.cardHeader
  const cardBody= props.cardBody */}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Dashboard;