import React from 'react'
import { Link } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import DashboardIcon from '@material-ui/icons/Dashboard';
import BarChartIcon from '@material-ui/icons/BarChart';
import SettingsIcon from '@material-ui/icons/Settings';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({
    
    icons: {
        color: '#cead59',
        
    },
    buttonText: {
        fontSize: 22,
    },
    item: {
        '&:hover': {
            backgroundColor: '#484848'
        }
    }

  }));

function ListItems() {
    const classes = useStyles();

    
    return (
        <div>
            <ListItem button className={classes.item} to={'/dashboard'} component={ Link }>
                <ListItemIcon className={classes.icons}>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" className={classes.buttonText} disableTypography/>
            </ListItem>

            <ListItem button className={classes.item} to={'/accounts'} component={ Link }>
                <ListItemIcon className={classes.icons}>
                    <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary="Accounts" className={classes.buttonText} disableTypography/>
            </ListItem>

            <ListItem button className={classes.item}>
                <ListItemIcon className={classes.icons}>
                    <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary="Transactions" className={classes.buttonText} disableTypography/>
            </ListItem>

            <ListItem button className={classes.item}>
                <ListItemIcon className={classes.icons}>
                    <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary="Reports" className={classes.buttonText} disableTypography/>
            </ListItem>

            <ListItem button className={classes.item}>
                <ListItemIcon className={classes.icons}>
                    <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Settings" className={classes.buttonText} disableTypography/>
            </ListItem>
        </div>
    )
}

export default ListItems
