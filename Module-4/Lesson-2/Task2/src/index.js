import React, { Component } from 'react';

import ReactDOM from 'react-dom';

import "./index.css";

class App extends Component{
    render(){
        return(
            <div className='box'>
                <h3>Murad Orujov</h3>
                <p>How I can create component</p>
            </div>
        )}
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App/>,rootElement)