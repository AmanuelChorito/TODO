import React, { Component } from 'react';

import Counter from './Components/counter/Counter';
import TodoApp from './Components/todo/TodoApp'

import './App.css';

class App extends Component {
  render(){
  return (
    <div className="App">
     {/* <Counter ></Counter>*/}
    <TodoApp></TodoApp>
    </div>
    
  );
}
}

export default App;

