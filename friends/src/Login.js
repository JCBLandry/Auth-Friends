import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from './actions'

class Login extends React.Component {
    state = {
        credentials: {
            username: "",
            password: ""
        }
    }

    handleChange = e => {
        this.setState({
          credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
          }
        })
    }

    handleLogin = e => {
        e.preventDefault();
        this.props
          .login(this.state.credentials)
          .then(() => this.props.history.push("/auth"));
    }

    render() {
        return (
            <div>
                <Link to='/'>Return to Launcher!</Link>
                <form onSubmit={this.handleLogin}>

                    <input type='text' name='username' placeholder='Username' 
                    value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <button>Click Here to Login!</button>
                </form>
            </div>
        )
    }
}

export default connect(
    null,
    { login }
)(Login)