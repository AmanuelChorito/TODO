import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import HelloWorldService from '../../api/todo/HelloWorldService.js'

class WelcomeComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            welcomeMessage:' ',
            errorResponse:false,
            successReport:true


        }
    }
    render() {
        return (
            <>
                <h1>Welcome</h1>
                <div className="container">
                 welcome {this.props.match.params.name} You can manage your todos<Link to="/todos">here</Link>
                </div>
                <div className="container">
                Click here to get a customized welcome message.
                <button onClick={this.retrieveWelcomeMessage} className="btn btn-success">Welome Message</button>
                </div>
                <div  className="container">
                    {this.state.errorResponse && <div className="alert alert-warning">{this.state.welcomeMessage}</div>}
                    {this.state.successReport && <div className="">{this.state.welcomeMessage}</div>}
                </div>
            </>
           

        )
    }
    retrieveWelcomeMessage=()=>{
    //     HelloWorldService.executeHelloWorldService()
    //         .then(response => this.handleSuccessfulesponse(response) )
    //   //  .catch()

        HelloWorldService.executeHelloWorldBeanService()
            .then(response => this.handleSuccessfulesponse(response))
      //  .catch()

        HelloWorldService.excecutehelloWorldPathvariableServce(this.props.match.params.name)
          .then(response => this.handleSuccessfulesponse(response))
        .catch(error=>this.handleError(error))
    }


    handleSuccessfulesponse=(response)=>{
       this.setState({welcomeMessage:response.data.message})
        this.setState({ errorResponse: false, successReport: true })
    }

    handleError=(error)=>{
        this.setState({ welcomeMessage: error.response.data.message })
        this.setState({ errorResponse: true, successReport:false})
    }

   
}
export default WelcomeComponent
