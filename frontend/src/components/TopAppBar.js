import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({
    
    appBar: {
      background: '#1E1E1E',
      color: '#cadff0',
      
      height: 75,
    },
    text: {
        flexGrow: 1,
        marginLeft: 45,
    },
    button: {
        fontSize: 16,
        padding: '6px 70px',
        backgroundColor: '#9ace57',
        color: '#1E1E1E',
        '&:hover': {
            backgroundColor: '#729b3d'
        },
    },


  }));

function TopAppBar() {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h4" className={classes.text}>
                        Finance Tracker
                    </Typography>
                    <Button variant="contained" color="primary" size="large" className={classes.button}>Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default TopAppBar
