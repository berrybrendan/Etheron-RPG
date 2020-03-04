import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import theme from '../utils/themeUtil';
import MapContainer from '../components/MapContainer'
import Controls from '../components/Controls'
import Stats from '../components/Stats'
import Weapons from '../components/Weapons'
import Modal from '../components/common/Modal';

function MainGame(){
    return(
        <ThemeProvider theme={ theme }>
            <Grid container component="main" >
            <Grid item xs={12} sm={8} md={8} elevation={6}>
                <MapContainer></MapContainer>
            </Grid>
            <Grid item xs={false} sm={4} md={4}>
                <Modal>
                    <Controls></Controls>
                </Modal>
                <Stats></Stats>
                <Weapons></Weapons>
            </Grid>
            </Grid>
        </ThemeProvider>
    )
}

export default MainGame