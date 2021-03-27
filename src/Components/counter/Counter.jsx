import React, { Component } from 'react';
import prototypes from 'prop-types'
import './Counter.css';



class Counter extends Component{


    //constructor
constructor(){
    super();
    this.state={
        counter:0
        
    }
    }

    render() {
        return (
            <div className="counter">
                <CounterButton by={1} incrementMethod={this.increment}></CounterButton>
                <CounterButton by={5} incrementMethod={this.increment}></CounterButton>
                <CounterButton by={10} incrementMethod={this.increment}> </CounterButton>
                <span className="count">{this.state.counter}</span>
            </div>

        );
    }

    increment = (incrementby) => {
    
        this.setState({
            counter: this.state.counter +incrementby


        })

    }

}
 class CounterButton extends Component {


//constructor
constructor(){
    super();
    this.state={
        counter:0
        
        
    }
    //this.increment = this.increment.bind(this)
}

     render=()=>{
    return (
        <div className="counterbuttens">
            <button onClick={this.increment}>+{this.props.by}</button>
            <span className="count">{this.state.counter}</span>
       
        </div>
    );
    }

 increment=()=> {
   this.setState({
       counter:this.state.counter+this.props.by
           
   })
  this.props.incrementMethod(this.props.by)
    
}

}

CounterButton.defaultProps={
    by:1
}

CounterButton.prototypes={
    by:prototypes.number
}

export default Counter