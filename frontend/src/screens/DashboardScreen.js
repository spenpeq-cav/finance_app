import React, { useState, useEffect }  from 'react'
import Typography from '@material-ui/core/Typography';
import { Container, Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import { PlaidLink } from 'react-plaid-link';
import ReactJson from 'react-json-view';

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

    const [linkLoaded, setLinkLoaded] = useState(false)

    const [link_token, set_link_token] = useState('')
    const [access_token, set_access_token] = useState('')

    const [accounts, set_accounts] = useState('')
    const [transactions, set_transactions] = useState('')
    


    function fetchLinkToken(){
      console.log('Fetching Link Token...')
      var url = 'http://127.0.0.1:8000/plaid_api/link_token/'

      fetch(url).then(response => response.json()).then(data => set_link_token(data.link_token))
      
    }

    function fetchAccounts(){
      console.log('Accounts info...')
      var url = 'http://127.0.0.1:8000/plaid_api/accounts/'
      const configs = {
        method: "POST",
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
          access_token: access_token,
        })
      }
      fetch(url, configs).then(response => response.json()).then(data => set_accounts(data))
    }

    function fetchTransactions(){
      console.log('Transaction info...')
      var url = 'http://127.0.0.1:8000/plaid_api/transactions/'
      const configs = {
        method: "POST",
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
          access_token: access_token,
        })
      }
      fetch(url, configs).then(response => response.json()).then(data => set_transactions(data))
    }

    const onSuccess = (token, metadata) =>{
        console.log('Exchanging Access Token...')
        var url = 'http://127.0.0.1:8000/plaid_api/access_token/'
        const configs = {
            method: "POST",
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
            public_token: token,
            })
        }
        
        fetch(url, configs).then(response => response.json()).then(data => set_access_token(data.access_token))
    }

    useEffect(() => {
        if(link_token === ''){
            fetchLinkToken()
        }
        if(transactions !== ''){
            setLinkLoaded(true)
        }
      }, [link_token, transactions])


    return (
        <div>
            { linkLoaded ? 
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
                                        <Typography>Total Transactions: {transactions['total_transactions']}</Typography>
                                        <Typography>Total Accounts: {transactions['accounts'].length}</Typography>
                                        <Typography>Total Balances: </Typography>
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
                                <Grid item xs={12}>
                                    <Paper className={classes.paper}>
                                        <Typography>All Accounts</Typography>
                                        <Typography>Total Accounts: {transactions['accounts'].length}</Typography>
                                        <Typography>
                                            {transactions['accounts'].map((acc) => (
                                                <div key={transactions['accounts'].index} >
                                                    {acc.name} | $ {acc.balances['current']} | {acc.type}
                                                </div>
                                            ))}
                                        </Typography>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12}>
                                    <Paper className={classes.paper}>
                                        <Typography>All Transactions</Typography>
                                        <Typography>Total Transactions: {transactions['total_transactions']}</Typography>
                                        <Typography>
                                            {transactions['transactions'].map((tr) => (
                                                <div key={transactions['transactions'].index} >
                                                    Date: {tr.date} | {tr.name} | $ {tr.amount} 
                                                </div>
                                            ))}
                                        </Typography>
                                    </Paper>
                                </Grid> 
                            </Grid>
                            <div>
                                <ReactJson src={transactions} theme="monokai" collapsed= {true} />
                            </div>
                
                        </Grid>
                    </Grid>
                </div> 
                : (
                    <div>
                        <TopAppBar />
                
                        <Grid container>
                            <Grid item sm={2} className={classes.sidebar}>
                                <Box>
                                    <ListItems className={classes.psaper}/>
                                </Box>
                                
                            </Grid>
                            <Grid item lg={10} className={classes.contentcontainer}>
                                <h1>Connect to Plaid to get started.</h1>

                                <PlaidLink
                                className="CustomButton"
                                style={{ padding: '20px', fontSize: '16px', cursor: 'pointer' }}
                                token={link_token ? link_token : ''}
                                onSuccess={onSuccess}>
                                Open Plaid and connect your bank!
                                </PlaidLink>

                                <div>
                                    <button id="transactions-btn" onClick = {() => {fetchTransactions()}}>Get Transactions</button>
                                </div>

                            </Grid>
                        </Grid>
                    </div>
                )
            }
            
            
        </div>
    )
}

export default DashboardScreen
