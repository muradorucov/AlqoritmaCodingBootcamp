import React from "react";

export default class SignupForm extends React.PureComponent{
  state={
    nameValue:"",
    lastNameValue:"",
    telValue:"",
    emailValue:"",
    comment:"",
    isValid:true
  }
  handleSubmit=(event)=>{
    event.preventDefault();
  }
  handleChangeName=(event)=>{
    this.setState({nameValue: event.target.value});
  }
  handleChangeLastName=(event)=>{
    this.setState({lastNameValue:event.target.value})
  }
  handleChangeTel=(event)=>{
    this.setState({telValue:event.target.value})
  }
  handleChangeEmail=(event)=>{
    this.setState({emailValue:event.target.value})
  }
  handleChangeComment=(event)=>{
    this.setState({comment:event.target.value})
  }
  valueShowConsole =()=>{
    alert(`
    Ad:${this.state.nameValue}, 
    Soyad: ${this.state.lastNameValue}, 
    Telefon: ${this.state.telValue}, 
    Email: ${this.state.emailValue},
    Comment:${this.state.comment}`
    )
  }
  render(){
    let {nameValue,lastNameValue,telValue,emailValue,comment,isValid}=this.state;
    if(nameValue==="" || lastNameValue==="" || telValue==="" || emailValue==="" || comment===""){
      isValid=true
    }else{
      isValid=false
    }
    return(
      <div className="app">
        <form onSubmit={this.handleSubmit} className="block">
          Name: <input type="text" value={nameValue} onChange={this.handleChangeName} />
          Lastname: <input type="text" value={lastNameValue} onChange={this.handleChangeLastName}/>
          Phone:<input type="tel" value={telValue} onChange={this.handleChangeTel}/>
          E-mail:<input type="email" value={emailValue} onChange={this.handleChangeEmail}/>
          Comment:<textarea rows="4" cols="40"  value={comment} onChange={this.handleChangeComment}/>
          <button type="submit" className={isValid ? "button2" : "button"} disabled={isValid} onClick={this.valueShowConsole}>Submit</button>
        </form>
      </div>
    )
  }
}