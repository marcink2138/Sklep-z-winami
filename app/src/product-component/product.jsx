import React from "react";
import history from '../history';
import Cookies from 'js-cookie'
export class Product extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id
        }
    }

    addToCart = () => {
        console.log(this.state.id);
        const data = {
            jwt: Cookies.get('jwt'),
            wineId: this.state.id,
            amount: "1"
        }
        fetch('https://s402340.labagh.pl/API/Customer/add-to-basket.php', {
            method: 'POST',
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
        return(
            <div className="product">
                <img width="200px" height="auto" src={`https://s402340.labagh.pl${this.props.img_path}`}/>
                <div><h3>{this.props.name}</h3></div>
                <div><h4>{this.props.price}</h4></div>
                <button className="buttonProduct" onClick={this.addToCart}>Dodaj do koszyka</button>
            </div>
        )
    }
}