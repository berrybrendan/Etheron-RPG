import React, { useState , useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import SettingsIcon from '@material-ui/icons/Settings';
import { useHistory } from "react-router-dom";
import DashboardIcon from '@material-ui/icons/Dashboard';
// import theme from '../utils/themeUtil';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

}));

export default function ButtonAppBar(props) {
  let history = useHistory();
  const classes = useStyles();
  // const [dash, setDash] = useState (true)

  // useEffect(() => {
  //   if()
  // })

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {
            (history.location.pathname === '/dashboard')
            ? (<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={props.settings} >
            <SettingsIcon />
          </IconButton>)
          : (<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={props.dash} >
          <DashboardIcon />
        </IconButton>)
          }
          
          <Typography variant="h5" className={classes.title} align="center">
            Etheron-RPG
          </Typography>
          <Button onClick={props.logout} color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}