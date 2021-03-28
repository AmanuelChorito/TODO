import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'
class WelcomeComponent extends Component {
    render() {
        return (
            <>
                <h1>Welcome</h1>
                <div clasName="container"></div>
                <div> welcome {this.props.match.params.name} You can manage your todos<Link to="/todos">here</Link>
                </div>
            </>
        )
    }
}
export default WelcomeComponent
