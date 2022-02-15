import React, { useState } from "react";
import profilePicture from "../userdefault.png";
import "./style.scss";
import Cookies from 'js-cookie'

function Order(props) {

    const [winneId] = useState(props.id);
    console.log(winneId);
    const [howMany, setHowMany] = useState(props.amount);
    const [xd, setXd] = useState(0);

    const DeleteButtonClick = () => {
        let json
        console.log(winneId)
        const data = {
            jwt: Cookies.get('jwt'),
            wineId: winneId,
        }
        fetch('https://s402340.labagh.pl/API/Customer/delete-from-basket.php', {
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
                //data = data.wines;
                //console.log(data);
                //console.log(this.state.ShouldWeRender);
                setXd(1);
                json = data;
            })
            .catch((error) => {
                console.error('Error', error);
            });
    }

    return (
        <div className="order2">
            <div className="content">
                <div className="content2">
                    <div className="form">
                        {props.wineName}
                    </div>
                    <div className="form">
                        Ilość: {howMany}
                    </div>
                    <div className="forma2">
                        <button className="button" className="btn" onClick={DeleteButtonClick}>
                            Usuń z koszyka
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order;