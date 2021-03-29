import React, {Component} from 'react'
class TodoComponent extends Component{
render(){
    return(<div> To don Component fro id {this.props.match.params.id}</div>)
    
}

}
export default TodoComponent