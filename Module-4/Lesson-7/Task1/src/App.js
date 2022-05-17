import React from "react";

export default class SignupForm extends React.Component{
  state ={
    value:""
  }
  handleChange=(event)=>{
    this.setState({
      value: event.target.value
    })
    console.log(this.state.value)
  }
  render(){
    return(
      <div>
        <label htmlFor="name">
          Name: <input id="name" onChange={this.handleChange} />
        </label>
        <br></br>
        <label htmlFor="email">
          Email: <input id="email" onChange={this.handleChange} />
        </label>
        <br></br>
        <label htmlFor="password">
          Password: <input id="password" onChange={this.handleChange} />
        </label>
      </div>
    )
  }
}