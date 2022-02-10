import React from "react";
import loginImg from "../login.jpg";
export class Login extends React.Component {

    constructor(props) {
        super(props);
    }

    handleLoginChange = (e) => {
        this.setState({login: e.target.value});
    }
    
    handlePasswordChange = (e) => {
        this.setState({password: e.target.value});
    }

    handleLogin = (e) => {
        console.log(this.state.password);
        console.log(this.state.login);
        const data = {
            login: this.state.login,
            password: this.state.password
        };
        fetch('https://s402340.labagh.pl/API/Importer/login.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error', error);
        });
    }

    render() {
        return (
        <div className="base-container">
            <div className="header">Wino Wino wypij do dna</div>
            <div className="content">
                <div className="imageLogin">
                    <img src={loginImg}/>
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="login">Login</label>
                        <input type="text" name="login"  onChange={this.handleLoginChange} placeholder="Login"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Hasło</label>
                        <input type="text" name="password" onChange={this.handlePasswordChange} placeholder="Hasło"/>
                    </div>
                </div>
                <div className="footer">
                    <button type="button" className="btn" onClick={this.handleLogin}>
                        Zaloguj
                    </button>
                </div>
            </div>
        </div> )
    }
}