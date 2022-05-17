import React from "react";

export default class App extends React.Component{
  state={
    lastKey: null,
    className:'App'
  };
  onKeyPress =(e)=>{
    this.setState({lastKey:e.key});
  };
  componentDidMount(){
    window.addEventListener("keypress",this.onKeyPress);
  }
  render(){
    let {lastKey,className} =this.state;
    switch (lastKey) {
      case '1':
        className="App App-red";
        break;
      case '2':
        className="App App-blue";
        break;
    }
    return(
      <div className={className}>
        <p>lastKey: {this.state.lastKey}</p>
      </div>
    )
  }
}