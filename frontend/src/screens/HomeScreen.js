import { Link } from '@material-ui/core'
import React from 'react'
import Button from '@material-ui/core/Button';

function HomeScreen() {
    return (
        <div>
            <h1>Home Screen</h1>
            <Button variant="outlined" color="inherit" href="/dashboard">To Dashboard</Button>
        </div>
    )
}

export default HomeScreen
