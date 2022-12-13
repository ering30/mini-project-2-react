import React, { Component } from 'react'

// import ErrorBoundary from '../components/ErrorBoundary';

import { makeStyles } from '@material-ui/core/styles';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Container } from '@material-ui/core';
import GetStartedButton from '../components/GetStartedButton';

const useStyles = makeStyles((theme) => ({
    pageWrapper: {
        width: '80%',
        margin: '0 auto',
        paddingTop: '10%',
        textAlign: 'center'
    },
    heroText: {
        color: '#357a38',
        fontFamily: 'Unbounded',
        fontWeight: '200',
        fontSize: '3rem',
    },
}));

export default function Home() {
    const classes = useStyles();
    return (
        <Container className={classes.pageWrapper} maxWidth="lg">
                    <h1 className={classes.heroText} >TRAVEL CARBON EMISSIONS CALCULATOR</h1>
                    <GetStartedButton className={classes.GetStartedButton}/>
        </Container>
        )
}