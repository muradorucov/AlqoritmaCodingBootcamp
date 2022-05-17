import React from "react";

export default class App extends React.Component{
  state={
    lastKey: null
  };
  onKeyPress =(e)=>{
    this.setState({lastKey:e.key});
  };
  componentDidMount(){
    window.addEventListener("keypress",this.onKeyPress);
  }
  render(){
    return(
      <main>lastKey: {this.state.lastKey}</main>
    )
  }
}