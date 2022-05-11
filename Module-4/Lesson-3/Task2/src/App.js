import React,{Component} from "react";

import User from "./User";

class App extends Component{
    render(){
        return(
            <div className="users">
                <User
                    isInDataBase
                    name="Murad Orucov"
                    age={22}
                    info="Veb Proqramçıdır.Hal-hazırda React öyrənir."
                />
                <User
                    name="Baloğlan Əşrəfov"
                    age={73}
                    info="Xanəndədir. 2021-ci ildə vəfat edib."
                />
                <User
                    isInDataBase
                    name="Ipman"
                    age={76}
                    info="Çin döyüş sənəti ustasıdır. 1973-ci dilə vəfat etmişdir."
                />
            </div>
        )
    }
}

export default App;