import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles'

import theme from '../../utils/themeUtil';
import SignIn from '../../pages/SignIn';
import SignUp from '../../pages/SignUp';

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={ theme }>
          <Switch>
            <Route exact path='/' component={ SignIn }></Route>
            <Route exact path='/signup' component={ SignUp }></Route>
          </Switch>
        </ThemeProvider>
      </Router>
      
    );
  }
}


/*
class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={ theme }>
          <Switch>
            <Route exact path='/' component={ Homepage }></Route>
            <Route exact path='/signin' component={ SignIn }></Route>
            <Route exact path='/signup' component={ SignUp }></Route>
          </Switch>
        </ThemeProvider>
      </Router>
      
    );
  }
}
*/
export default App;
