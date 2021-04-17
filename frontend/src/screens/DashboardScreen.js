import React from 'react'
import Typography from '@material-ui/core/Typography';
import { Container, Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import TopAppBar from '../components/TopAppBar'
import ListItems from '../components/ListItems'


const useStyles = makeStyles(({
    root: {
      display: 'flex',
    },

    sidebar: {
        height: '100vh',
        background: '#333333',
        color: '#cead59',
        width: '10vh',
        fontSize: 16,
    },

    paper: {
        padding: 25,
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        padding: 25,
        height: 240,
        textAlign: 'center',
        background: '#d5e6f3'
    },

    items: {
        margin: 20,
    },

    contentcontainer: {
        background: '#579ACE',
        padding: '55px 150px',
    },
  }));

function DashboardScreen() {
    const classes = useStyles();
    
    return (
        <div>
            <TopAppBar />
            
            <Grid container>
                <Grid item sm={2} className={classes.sidebar}>
                    <Box>
                        <ListItems className={classes.psaper}/>
                    </Box>
                    
                </Grid>
                <Grid item lg={10} className={classes.contentcontainer}>
        
                    <Grid container spacing={6}>
                        <Grid item xs={9}>
                            <Paper className={classes.paper}>
                                <Typography>Funds and some more text to put in here</Typography>
                                <Typography>Funds</Typography>
                                <Typography>Funds</Typography>
                                <Typography>Funds</Typography>
                                <Typography>Funds</Typography>
                                <Typography>
                                    $ 3,345.56
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.paper}>
                                <Typography>Funds and some more text to put in here</Typography>
                                <Typography>Funds</Typography>
                                <Typography>Funds</Typography>
                                <Typography>Funds</Typography>
                                <Typography>Funds</Typography>
                                <Typography>
                                    $ 3,345.56
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper className={classes.paper}>
                                <Typography>Funds and some more text to put in here</Typography>
                                <Typography>Funds</Typography>
                                <Typography>Funds</Typography>
                                <Typography>Funds</Typography>
                                <Typography>Funds</Typography>
                                <Typography>
                                    $ 3,345.56
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper className={classes.paper}>
                                <Typography>Funds and some more text to put in here</Typography>
                                <Typography>Funds</Typography>
                                <Typography>Funds</Typography>
                                <Typography>Funds</Typography>
                                <Typography>Funds</Typography>
                                <Typography>
                                    $ 3,345.56
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper className={classes.paper}>
                                <Typography>Funds and some more text to put in here</Typography>
                                <Typography>Funds</Typography>
                                <Typography>Funds</Typography>
                                <Typography>Funds</Typography>
                                <Typography>Funds</Typography>
                                <Typography>
                                    $ 3,345.56
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper className={classes.paper}>
                                <Typography>Funds and some more text to put in here</Typography>
                                <Typography>Funds</Typography>
                                <Typography>Funds</Typography>
                                <Typography>Funds</Typography>
                                <Typography>Funds</Typography>
                                <Typography>
                                    $ 3,345.56
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper className={classes.paper}>
                                <Typography>Funds and some more text to put in here</Typography>
                                <Typography>Funds</Typography>
                                <Typography>Funds</Typography>
                                <Typography>Funds</Typography>
                                <Typography>Funds</Typography>
                                <Typography>
                                    $ 3,345.56
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
        
                </Grid>
            </Grid>
            
        </div>
    )
}

export default DashboardScreen
