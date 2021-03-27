import React, { Component } from 'react';
import FirstComponent from './Components/learning-examples/FirstComponent';
import SecondComponent from './Components/learning-examples/SecondComponent';
import ThirdComponent from './Components/learning-examples/ThirdComponent';
import './App.css';

class App extends Component {
  render(){
  return (
    <div className="App">
      My Hello World 
       <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      <ThirdComponent></ThirdComponent>
    </div>
    
  );
}
}

export default App;

