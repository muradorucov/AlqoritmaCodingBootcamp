import React,{Component} from 'react';

import ReactDOM from 'react-dom';

import './index.css';


class App extends Component {
    render(){
        return(
            <>
                <h3>Murad Orujov</h3>
                <p>Now I can create component</p>
            </>
        )
    }
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App/>,rootElement)