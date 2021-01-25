/* eslint-disable */
import './App.css';

export default function App(props){

  function fetchData(){
    console.log('Fetching...')
    var url = 'http://127.0.0.1:8000/api/test/'

    fetch(url).then(response => response.json()).then(data => console.log(data))
  }


  return (
    <div>
      <div>
        Dashboard
      </div>
      <div>
        <button id="link-btn" onClick = {() => {fetchData()}}>Link Account</button>
      </div>
      
    </div>
    
    
  );
}

