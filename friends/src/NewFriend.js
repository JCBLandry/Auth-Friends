import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFriend } from './actions'
import { withRouter } from 'react-router-dom'

class NewFriend extends Component {
  state = {
    name: '',
    age: '',
    email: ''
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  addFriend = e => {
    e.preventDefault();
    const { name, age, email } = this.state;
    this.props.addFriend({ name, age, email });
    this.setState({ name: '', age: '', email: '' });
    this.props.history.push("/auth");
  }
 

  render() {
    const { name, age, email } = this.state;
    return (
      <div>
        <h2>Add New Friend</h2>

        <form onSubmit={this.addFriend}>
          <label>Name: </label>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            value={name}
            onChange={this.handleInput}
          />
          <br />

          <label>Age: </label>
          <input
            type="text"
            placeholder="Enter Age"
            name="age"
            value={age}
            onChange={this.handleInput}
          />
          <br />

          <label>Email: </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            value={email}
            onChange={this.handleInput}
          />
          <br />

          <button to='/auth' type="submit">Add Friend!</button>
        </form>
      </div>
    );
  }
}

export default withRouter(
    connect(null, { addFriend })(NewFriend))