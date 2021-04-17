/* eslint-disable */
import './App.css';
import './components/Link'
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Link from './components/Link';

import HomeScreen from './screens/HomeScreen'
import DashboardScreen from './screens/DashboardScreen'


export default function App(){

  return (
    <Router>
      <Route path ='/' component={HomeScreen} exact />
      <Route path ='/dashboard' component={DashboardScreen}/>
      <Route path ='/link' component={Link} />
    </Router>
    
  );
}
