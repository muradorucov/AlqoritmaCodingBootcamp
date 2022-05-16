import React from "react";

export default class App extends React.Component{
  state={
    text: "Click here",
    className:" ",
    isInClick:"false"
  }
  clickHandler=()=>{
    this.setState({text:"Clicked", className:"clicked",isInClick:"ture"});
  }
  render(){
    const {text,className} =this.state;
    return(
      <div className="App">
        <button onClick={this.clickHandler} className={className}>{text}</button>
      </div>
    )
  }
}