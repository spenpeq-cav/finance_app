import { Link } from '@material-ui/core'
import React from 'react'
import Button from '@material-ui/core/Button';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({
    root: {
      display: 'flex',
    },

    items: {
        margin: 50,
        textAlign: 'center',
    },

    mainContainer: {
        background: '#d5e6f3',
        
    },

    allContainer: {
        background: '#579ACE',
        padding: '350px',
        height: '100vh',
    },

  }));



function HomeScreen() {
    const classes = useStyles();

    return (
        <Grid container className={classes.allContainer}>
            <Grid container className={classes.mainContainer}>
                <Grid item sm={12} className={classes.items}>
                    <h1>Personal Finances</h1>
                    <Button variant="outlined" color="inherit" href="/dashboard">Go To Dashboard</Button>
                    <Button variant="outlined" color="inherit" href="/dashboard">More Info</Button>
                    <Button variant="outlined" color="inherit" href="/dashboard">View Code</Button>
                </Grid>      
            </Grid>
        </Grid>
        
            
        
    )
}

export default HomeScreen
