import React from "react";

export default class App extends React.Component{
  state={
    data:[]
  }
  getData=()=>{
    fetch("https://acb-api.algoritmika.org/api/transaction")
    .then(res=>res.json())
    .then(data=>{
      this.setState({data:data})
      
    });
  };
  componentDidMount(){
    this.getData();
    
  }
  render(){
    const {data} =this.state;
    return(
      <div className="App">
        {data.map(item => 
          <li key={item.id}>{item.from}-dan {item.to}-ya {item.amount} manat</li>
        )}
      </div>
    )
  }
}