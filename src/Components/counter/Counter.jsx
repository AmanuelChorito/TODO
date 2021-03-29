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
                <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
                <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
                <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}> </CounterButton>
                <span className="count">{this.state.counter}</span>
                <div><button className="reset" onClick={this.reset}>Reset</button></div>
            </div>

        );
    }

    increment = (by) => {
    
        this.setState((prevState)=>{
            return { counter: prevState.counter +by}
        }

       )

    }
    decrement=(by)=>{
  this.setState((prevState)=>{
      return { counter: prevState.counter - by}
  })
    }

   reset=()=>{
       this.setState(()=>{
 return{counter: 0}
       })
      
   }

}
 class CounterButton extends Component {



}

     render=()=>{
    return (
        <div className="counterbuttens">
            <button onClick={()=>this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
            <button onClick={()=>this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
            
       
        </div>
    );
    }
 }

CounterButton.defaultProps={
    by:1
}

CounterButton.prototypes={
    by:prototypes.number
}

export default Counter