import React from 'react';
import Unity, { UnityContent } from "react-unity-webgl";

import { ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import theme from '../utils/themeUtil';
// import blah from '../../public/../src/pages/Unity/Build/testExport2.json'

function MainGame(){
    const unityContent = new UnityContent(
        "../src/pages/Unity/Build/testExport2.json",
        "../src/pages/Unity/Build/UnityLoader.js"
    );

    return(
        <ThemeProvider theme={ theme }>
            <Grid container component="main" >
                <Unity unityContent={unityContent} />
            <Grid item xs={12} sm={8} md={8} elevation={6}>
            </Grid>
            <Grid item xs={false} sm={4} md={4}>
            </Grid>
            </Grid>
        </ThemeProvider>
    )
}

export default MainGame