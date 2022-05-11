import React,{Component} from "react";

class User extends Component{
    render(){
        return(
            <div className="user">
                <h3>{this.props.name}</h3>
                <h5>{this.props.age}</h5>
                <p>{this.props.info}</p>
            </div>
        )
    }
}

export default User;