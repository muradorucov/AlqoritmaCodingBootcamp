import React, { Component } from 'react';

import ReactDOM from 'react-dom';

import './index.css';

class App extends Component{
    render(){
        return(
            <div className='box'>
                <AppTitle/>
                <AppDescription/>
            </div>
        )
    }
}


class AppTitle extends Component{
    render(){
        return(
            <>
                <h3>Murad Orucov</h3>
            </>
        )
    }
}

class AppDescription extends Component{
    render(){
        return(
            <>
                <p>How I can create Component</p>
            </>
        )
    }
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App/>,rootElement)