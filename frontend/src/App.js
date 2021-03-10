/* eslint-disable */
import './App.css';
import './components/Link'
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Link from './components/Link';
import Dashboard from './components/Dashboard';


export default function App(){

  return (
    <Router>
      <Route path ='/' component={Dashboard} exact />
      <Route path ='/link' component={Link} />
    </Router>
    
  );
}
