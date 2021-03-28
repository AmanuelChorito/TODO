import React, { Component } from 'react'

import AuthenticationService from './AuthenticationService.js'



class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "todo",
            password: '',
            hasLoginFailed: false,
            LoginSuccess: false
        }
    }

    render = () => {

        return (
            <div >
                <h1>Login</h1>
                <div className="container">
                    {this.state.hasLoginFailed && <div className="alert alert-warning"> Invalid Credentials</div>}

                user Name:<input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    <button className="btn btn-success" onClick={this.loginClicked}>login</button>
                </div>
            </div>
        )
    }

    loginClicked = () => {

        if (this.state.username === 'todo' && this.state.password === 'dummy') {
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
            this.props.history.push(`/welcome/${this.state.username}`)
        }
        else {

            this.setState({ LoginSuccess: false })
            this.setState({ hasLoginFailed: true })
        }

    }
    handleChange = (event) => {

        this.setState({ [event.target.name]: event.target.value })
    }
}



export default LoginComponent