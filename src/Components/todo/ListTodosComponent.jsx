import React, { Component } from 'react'
import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'


class ListTodosComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            message:null
        }
    }
    componentDidMount(){
       this.refreshTodos();
    }

refreshTodos=()=>{
    let username = AuthenticationService.getUserLoggedIn()
    TodoDataService.retrieveAllTodos(username)
        .then(response => {

            this.setState({ todos: response.data })
        })
}
    deleteTodoClicked=(id)=>{
        let username = AuthenticationService.getUserLoggedIn()
        TodoDataService.delteTodo(username,id)
        .then(response=>{
            this.setState({message:`Delete of todo ${id} Successful`})
            this.refreshTodos();
        })
    }
    updateTodoClicked = (id) => {
        // let username = AuthenticationService.getUserLoggedIn()
        // TodoDataService.delteTodo(username, id)
        //     .then(response => {
        //         this.setState({ message: `Delete of todo ${id} Successful` })
        //         this.refreshTodos();
        //     })
        console.log(id)
        this.props.history.push(`/todos/${id}`)
    }

    render() {
        return (
            <div>
                <h1> List of Jobs</h1>
                {this.state                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 .message && <div class="alert alert-success"> {this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>id
        </th>
                                <th>description</th>
                                <th>Is Completed</th>
                                <th>Target Date</th>
                                <th>Update</th>
                                <th>Delete</th></tr></thead>
                                
                        <tbody>
                            {
                                this.state.todos.map(todo =>
                                    <tr key={todo.id}>
                                        <td>{todo.id}
                                        </td>
                                        <td> {todo.description}</td>
                                        <td> {todo.done.toString()}</td>
                                        <td> {todo.targateDate.toString()}</td>
                                        <td>{<button className="btn btn-success" onClick={() => this.updateTodoClicked(todo.id)}>Update</button>}</td>
                                        <td>{<button className="btn btn-warning" onClick={()=>this.deleteTodoClicked(todo.id)}>Delete</button>}</td>
                                        </tr>
                                )}

                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default ListTodosComponent