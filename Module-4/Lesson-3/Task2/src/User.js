import React,{Component} from "react";

class User extends Component{
    render(){
        const {isInDataBase, name, age, info} =this.props;
        return(
            <div className="user">
                {isInDataBase ? <div>👍</div> :<div>👎</div>}
                <h3>{name}</h3>
                <h5>{age}</h5>
                <p>{info}</p>
            </div>
        )
    }
}

export default User;