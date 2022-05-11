import React,{Component} from "react";

class App extends Component{
    clickHandler(){
        console.log("Button click!")
    }

    render(){
        return(
            <button type="button" onClick={this.clickHandler}>Subscribe Button</button>
        )
    }
}

export default App;