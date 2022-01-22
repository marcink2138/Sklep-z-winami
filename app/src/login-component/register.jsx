import React from "react";
import loginImg from "../login.jpg";

export class Register extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className="base-container" ref={this.props.containerRef}>
            <div className="header">Zarejestruj</div>
            <div className="form">
                <div className="form-group">
                    <label htmlFor="username">Nazwa</label>
                    <input type="text" name="username" placeholder="Nazwa użytkownika"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">E-Mail</label>
                    <input type="text" name="email" placeholder="email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Hasło</label>
                    <input type="text" name="password" placeholder="Hasło"/>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn">
                    Zarejestruj
                </button>
            </div>
        </div> )
    }
}