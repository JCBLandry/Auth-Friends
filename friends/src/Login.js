import React from 'react'
import { Form, Input, Button } from 'reactstrap'
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
                <Form onSubmit={this.handleLogin}>
                    <Input type='text' name='username' placeholder='Username' 
                    value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <Input
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <Button>Click Here to Login!</Button>
                </Form>
            </div>
        )
    }
}

export default connect(
    null,
    { login }
)(Login)