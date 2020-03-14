import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import theme from '../utils/themeUtil';

function MainGame(){
    return(
        <ThemeProvider theme={ theme }>
            <Grid container component="main" >
            <Grid item xs={12} sm={8} md={8} elevation={6}>
            </Grid>
            <Grid item xs={false} sm={4} md={4}>
            </Grid>
            </Grid>
        </ThemeProvider>
    )
}

export default MainGame