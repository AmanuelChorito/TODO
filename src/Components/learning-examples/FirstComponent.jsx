//class component
import React, { Component } from 'react';
class FirstComponent extends Component {
  render(){
  return (
    <div className="firstComponent">
    FirstComponenet
      
    </div>
  );
}
}
export default FirstComponent;

export  class SecondComponent extends Component {
    render() {
        return (<div className="secondComponent">
            SecondComponent
        </div>);
    }
}
export function ThirdComponent() {
    return (
        <div className="thirdComponent">
            ThirdComponent
        </div>
    );

}
 