import React from "react";

export default class SignupForm extends React.PureComponent{
  state ={
    nameValue:"",
    emailValue:"",
    passwordValue:"",
    isActive:false,
  }
  nameHandleChange=(event)=>{
    this.setState({
      nameValue: event.target.value
    })
  }
  emailHandleChange=(event)=>{
    this.setState({
      emailValue: event.target.value
    })
  }
  passwordHandleChange=(event)=>{
    this.setState({
      passwordValue: event.target.value
    })
  }
  handleChangeChackbox=()=>{
    this.setState({isActive:true})
  }
  onClickChange=()=>{
    this.setState({nameValue:"Murad",emailValue:"oricowmurad@gmail.com",passwordValue:"RWMa5Qyf"})
  }
  onClickDeleteName=()=>{
    this.setState({nameValue:""})
  }
  onClickDeleteEmail=()=>{
    this.setState({emailValue:""})
  }
  onClickDeletePassword=()=>{
    this.setState({passwordValue:""})
  }
  render(){
    let {nameValue,emailValue,passwordValue,isActive}=this.state
    return(
      <div>
        <label htmlFor="name">
          Name: <input id="name" onChange={this.nameHandleChange} value={nameValue} />
        </label>
        <button onClick={this.onClickDeleteName}>x</button>
        <br></br>
        <label htmlFor="email">
          Email: <input id="email" onChange={this.emailHandleChange} value={emailValue}/>
        </label>
        <button onClick={this.onClickDeleteEmail}>x</button>
        <br></br>
        <label htmlFor="password">
          Password: <input type={isActive ? "text": "password"}  id="password" onChange={this.passwordHandleChange} value={passwordValue}/>
        </label>
        <button onClick={this.onClickDeletePassword}>x</button>
        <br></br>
        <label htmlFor="show">
          Show Password: <input type="checkbox" checked={isActive} onChange={this.handleChangeChackbox} id="show"/>
        </label>
        <br></br>
        <button onClick={this.onClickChange}>Change Default Value</button>
      </div>
    )
  }
}