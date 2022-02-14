import React, { useState } from "react";
import profilePicture from "../userdefault.png";
import "./style.scss";

function Order(props) {

    const [howMany, setHowMany] = useState(3);

    const PlusButtonClick = () => {
        setHowMany(howMany + 1)
    }

    const MinusButtonClick = () => {
        if (howMany > 1) {
            setHowMany(howMany - 1)
        }
    }

    return (
        <div className="order">
            <div className="content">
                <div className="header">
                    {props.name}
                </div>
                <div className="content2">
                    <div className="image">
                        <img src={profilePicture} />
                    </div>
                    <div className="form">
                        <div className="form-group">
                            Kraj: {props.country}
                        </div>
                        <div className="form-group">
                            Cena: {props.price}
                        </div>
                        <div className="form-group">
                            Typ: {props.wine_type}
                        </div>
                        <div className="form-group">
                            Procent: {props.alcoholic_strength}
                        </div>
                    </div>
                    <div className="content">
                        <div className="content2">
                            <div className="form">
                                <div className="form-group2">
                                    <div>
                                        Ilość:
                                    </div>
                                    <div>
                                        {howMany}
                                    </div>
                                </div>
                            </div>
                            <div className="form">
                                <div className="form-group3">
                                    <button className="button" className="btn" onClick={PlusButtonClick}>
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className="form">
                                <div className="form-group3">
                                    <button className="button" className="btn" onClick={MinusButtonClick}>
                                        -
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="form">
                            <div className="form-group2">
                                <button className="button" className="btn">
                                    Usun wino z koszyka
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order;