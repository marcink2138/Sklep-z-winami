import React from "react";
import './helloPage.scss';
import history from '../history';
export class CustomerWindow extends React.Component {

    render() { 
        return (
            <div className="container">
                <h3>Jeśli jesteś klientem, przejdź do strony logowania dla klientów</h3>
                <button type="button" className="btn" onClick={() => history.push('/CustomerLoginPage')}>Logowanie dla klientów</button>
            </div>
        )
    }

}