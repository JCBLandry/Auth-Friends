import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import FriendsList from './FriendsList'
import Login from './Login'

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <PrivateRoute exact path='/'component={FriendsList} />
      <Route exact path='/login' component={Login} />
    </div>
  );}
}

export default App;
