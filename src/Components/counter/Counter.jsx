import React, { Component } from 'react';
import prototypes from 'prop-types'
import './Counter.css';
 class Counter extends Component {


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
        <div className="counter">
            <button onClick={this.increment}>+{this.props.by}</button>
            <span className="count">{this.state.counter}</span>
       
        </div>
    );
    }

 increment=()=> {
   this.setState({
       counter:this.state.counter+this.props.by
      
     
   })
    
}

}

Counter.defaultProps={
    by:1
}

Counter.prototypes={
    by:prototypes.number
}

export default Counter