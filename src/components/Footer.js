import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
// import MenuIcon from '@mui/icons-material/Menu';
// import { fontSize } from '@mui/system';
import BasicMenu from './BasicMenu';

const useStyles = makeStyles((theme) => ({
    footerText : {
        flexGrow: '1',
        color: "#fafbed",
    },
    footerDiv: {
        bottom: '0',
        margin: '0 auto',
        paddingTop: '10%',
        textAlign: 'center',
        position: 'fixed',
        width: '100%'
    }
}));

export default function Footer() {
    const classes = useStyles();
    return <div className={classes.footerDiv}>
        <p className={classes.footerText}>Created by Erin Gonthier 2022</p>
    </div>
}