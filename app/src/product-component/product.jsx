import React from "react";
import history from '../history';
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
            jwt: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NDQ4NTk3MzEsIm5iZiI6MTY0NDg1OTczMSwiZXhwIjoxNjQ0ODc3NzMxLCJpc3MiOiJodHRwczovL3M0MDIzNDAubGFiYWdoLnBsL0FQSSIsImRhdGEiOnsiaWQiOiI5IiwiYWNjVHlwZSI6IkN1c3RvbWVyIn19.f4PRoLl7PsV8cmIvxv-l7I14-ZO0KLlDd4Zhyq1eb3M",
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
                <div><h3>{this.props.name}</h3></div>
                <div><h4>{this.props.price}</h4></div>
                <button className="buttonProduct" onClick={this.addToCart}>Dodaj do koszyka</button>
            </div>
        )
    }
}