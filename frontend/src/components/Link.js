import React, { useState, useEffect } from 'react';
import { PlaidLink } from 'react-plaid-link';
import ReactJson from 'react-json-view';


function Link({match}) {
    const [link_token, set_link_token] = useState('')
    const [access_token, set_access_token] = useState('')

    const [accounts, set_accounts] = useState('')
    const [transactions, set_transactions] = useState('')
    
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
    
    useEffect(() => {
      
    })
    return (
      <div>

        <h1>Connecting to API Testing</h1>
        <div>
          <button id="link-btn" onClick = {() => {fetchLinkToken()}}>Link Token</button>
        </div>

        <PlaidLink
        className="CustomButton"
        style={{ padding: '20px', fontSize: '16px', cursor: 'pointer' }}
        token={link_token ? link_token : ''}
        onSuccess={onSuccess}>
          Open Link and connect your bank!
        </PlaidLink>

        <div>
          <button id="accounts-btn" onClick = {() => {fetchAccounts()}}>Get Accounts</button>
        </div>

        <div>
          <button id="transactions-btn" onClick = {() => {fetchTransactions()}}>Get Transactions</button>
        </div>

        <div>
          <ReactJson src={accounts} theme="monokai" collapsed= {true} />
          <ReactJson src={transactions} theme="monokai" collapsed= {true} />
        </div>

      </div>
    );
}

export default Link;
