import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {withRouter} from 'react-router'

import AuthenticationService from './AuthenticationService.js'
class HeaderComponent extends Component {
    render() {
        const isuserloggedin = AuthenticationService.isUserLoggedIn();
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div> <a href="" className="navbar-brand"> CPT for Lazy </a></div>
                    <ul className="navbar-nav">
                        {isuserloggedin && <li ><Link className="nav-link" to="/welcome/todo">Home </Link></li>}
                        {isuserloggedin && <li ><Link className="nav-link" to="/todos">View Jobs</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isuserloggedin && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isuserloggedin && <li> <Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>

            </header>
        )
    }
}
export default withRouter(HeaderComponent)