import React, { useState } from "react";
import profilePicture from "../userdefault.png";
import "./style.scss";
import Order from "./order";

export class Imports extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            ShouldWeRender: false,
            importList: []
            
            //ImporterDate: this.GetImporter(),
        }
        this.GetImports();
        //console.log('data:', this.state.importList, this.state.ShouldWeRender);
    }

    GetImports() {
        let json
        const data = {
            jwt: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NDQ4Mzk1MDMsIm5iZiI6MTY0NDgzOTUwMywiZXhwIjoxNjQ0ODU3NTAzLCJpc3MiOiJodHRwczovL3M0MDIzNDAubGFiYWdoLnBsL0FQSSIsImRhdGEiOnsiaWQiOiIxIiwiYWNjVHlwZSI6IkltcG9ydGVyIn19.g7PMjsIzOf4KoGxYY3dL6OJR2F7RPUZ045QGypbh35k",
        }
        fetch('https://s402340.labagh.pl/API/Importer/get-importer-wines.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            //data = JSON.parse(data);
            //console.log(data);
            data = data.wines;
            //console.log(data);
            this.setState({ShouldWeRender: true});
            //console.log(this.state.ShouldWeRender);
            this.setState({importList: data});
            json = data;
        })
        .catch((error) => {
            console.error('Error', error);
        });
        //return json
    }

    ButtonPress = (e) => {
    }

    render(){
        const {importList} = this.state;
        const AreWeRender = this.state.ShouldWeRender;
    return (
        <div className="basket">
            <div className="container-basket">
                <div className="user-container">
                    <div className="header">Importy</div>
                    <div>
                        {AreWeRender
                            && importList.map((order) => (
                                <Order
                                    //key={order}
                                    name={order.name}
                                    country={order.country}
                                    price={order.price}
                                    quantity={order.quantity}
                                    wine_type={order.wine_type}
                                    alcoholic_strength={order.alcoholic_strength}
                                />
                            ))
                        }
                    </div>
                    <div className="footeroutside">
                        <button type="button" className="btn" onClick={this.ButtonPress}>
                            Dodaj
                        </button>
                    </div>
                </div>
            </div>
        </div>);
}
}