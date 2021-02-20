import React, { useState, useEffect } from 'react';
import { PlaidLink } from 'react-plaid-link';

function Link({match}) {
    const onExit = (error, metadata) => console.log('onExit', error, metadata);
    
    const onEvent = (eventName, metadata) => {
      console.log('onEvent', eventName, metadata);
    }
    
    const onSuccess = (token, metadata) =>{
      console.log('onSuccess', token, metadata);
    }
    const [link_token, set_link_token] = useState(null)

    function fetchLinkToken(){
      console.log('Fetching Link Token...')
      var url = 'http://127.0.0.1:8000/plaid_api/link_token/'

      fetch(url).then(response => response.json()).then(data => set_link_token(data.link_token))
    }
    
    useEffect(() => {
      
    })
    return (
      <div>
          <div>
            <button id="link-btn" onClick = {() => {fetchLinkToken()}}>Link Token</button>
          </div>
          <PlaidLink
          className="CustomButton"
          style={{ padding: '20px', fontSize: '16px', cursor: 'pointer' }}
          token={link_token ? link_token : ''}
          onExit={onExit}
          onSuccess={onSuccess}
          onEvent={onEvent}
        >
          Open Link and connect your bank!
        </PlaidLink>
      </div>
    );
}

export default Link;
