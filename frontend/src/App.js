/* eslint-disable */
import './App.css';
import './components/Link'
import React, { useState } from 'react';

export default function App(){

  const [link_token, set_link_token] = useState(null)

  function fetchLinkToken(){
    console.log('Fetching Link Token...')
    var url = 'http://127.0.0.1:8000/plaid_api/link_token/'

    fetch(url).then(response => response.json()).then(data => set_link_token(data.link_token))
  }



  return (
    <div>
      <div>
        Dashboard
      </div>
      {/* <div>
        <button id="link-btn" onClick = {() => {fetchLinkToken()}}>Link Token</button>
      </div> */}
      
    </div>
    
    
    
  );
}
