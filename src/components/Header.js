import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
// import MenuIcon from '@mui/icons-material/Menu';
// import { fontSize } from '@mui/system';
import BasicMenu from './BasicMenu';

const useStyles = makeStyles((theme) => ({
    appbar: {
        background: "none",
        fontFamily: 'Unbounded',
    },
    icon: {
        color: '#357a38',
        fontSize: '3rem',
    },
    appbarTitle : {
        flexGrow: '1',
        color: '#357a38',
    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto'
    },
    logoNav:{
        color: '#357a38',
        textDecoration: "none",
    }
}));

export default function Header() {
    const classes = useStyles();
    return <div>
        <AppBar className={classes.appbar} elevation={0} >
            <Toolbar className={classes.appbarWrapper}><h1 className={classes.appbarTitle}><a className={classes.logoNav} href="/">CARBON8R</a></h1>
                <IconButton disableRipple>
                    <BasicMenu />
                </IconButton>
            </Toolbar>
        </AppBar>
    </div>
}