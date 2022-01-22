import React from "react";
import loginImg from "../login.jpg";
export class Login extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className="base-container">
            <div className="header">Ale mnie łeb nakurwia</div>
            <div className="content">
                <div className="image">
                    <img src={loginImg}/>
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Nazwa</label>
                        <input type="text" name="username" placeholder="Nazwa"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Hasło</label>
                        <input type="text" name="password" placeholder="hasło"/>
                    </div>
                </div>
                <div className="footer">
                    <button type="button" className="btn">
                        Zaloguj
                    </button>
                </div>
            </div>
        </div> )
    }
}