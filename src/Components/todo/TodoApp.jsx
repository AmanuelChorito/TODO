import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent.jsx'
import ListTodosComponent from './ListTodosComponent.jsx'
import ErrorComponent from './ErrorComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import HeaderComponent from './HeaderComponent'
import TodoComponent from './TodoComponent.jsx'
class TodoApp extends Component{

    render=()=>{
        return(
        <div className="todoApp">
        <Router>  
        <HeaderComponent></HeaderComponent>
        <Switch>
                    <Route path="/" exact component={LoginComponent}></Route>
                    <Route path="/login" component={LoginComponent}></Route>
                    <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
                    <AuthenticatedRoute path="/todos/:id" component={TodoComponent} />
                    <AuthenticatedRoute path="/todos" component={ListTodosComponent}/>
                    <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                    
                    </Switch>
        <FooterComponent></FooterComponent>
       </Router>
       </div>
        )}


}


   

export default TodoApp