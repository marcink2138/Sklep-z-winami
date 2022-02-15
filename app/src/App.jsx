import './App.scss';
import { Login, Register } from "./login-component/index";
import React from 'react';
import { CustomerLoginPage } from './login-component/customerLoginPage';
import { Hello } from "./mainPage-component/hello";
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';

class App extends React.Component {
    render() { return( 
        <Router>
            <Routes/>  
        </Router>
      )
    }
}

export default App;