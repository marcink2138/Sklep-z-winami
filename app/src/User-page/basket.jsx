import React, { useState } from "react";
import profilePicture from "../userdefault.png";
import "./style.scss";
import Order from "./order";

function Basket(props) {

    const [basketList, setBasketList] = useState(["jd", "jd2"]);

    return (
        <div className="basket">
            <div className="container-basket">
                <div className="user-container">
                    <div className="header">Koszyk</div>
                    <div>
                        {basketList.map((order) => (
                            <Order
                                key={order}
                                order={order}
                            />
                        ))}
                    </div>
                    <div className="footer">
                        <button type="button" className="btn" >
                            Dodaj
                        </button>
                    </div>
                </div>
            </div>
        </div>);
}

export default Basket;