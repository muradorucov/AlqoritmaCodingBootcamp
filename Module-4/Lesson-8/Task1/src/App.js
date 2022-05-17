import React from "react";

import ClientInfo from "./ClientInfo";

export default class App extends React.Component{
  state={
    ClientData:{
      name:"Murad",
      phone:"03735762626",
      birthday:"28-06-2000"
    },
    ClientData1:null
  }
  render(){
    return <ClientInfo ClientData={this.state.ClientDat1} />
  }
}