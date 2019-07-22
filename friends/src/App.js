import './App.css'
import React from 'react'
import Launcher from './Launcher'
import Login from './Login'
import PrivateRoute from './PrivateRoute'
import FriendsList from './FriendsList'
import NewFriend from './NewFriend'
import { Route } from 'react-router-dom'

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' render={() => (<Launcher />)}/>
        <Route path='/login' render={props => (<Login {...props} />)}/>
        <PrivateRoute exact path="/auth" component={FriendsList}/>
        <PrivateRoute exact path="/newfriend" component={NewFriend}/>
      </div>
    )
  }

}
