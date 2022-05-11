import React,{Component} from "react";

class App extends Component{
    state = {
        message:"Click Here",
    };
    render(){
        const {message} =this.state
        return(
            <button type="button">{message}</button>
        )
    }
}


export default App;