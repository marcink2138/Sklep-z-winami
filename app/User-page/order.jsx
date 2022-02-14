import React, { useState } from "react";
import profilePicture from "../userdefault.png";
import "./style.scss";

function Order(props) {

    return (
        <div className="order">
            <div className="content">
                <div className="header">
                    Nazwa
                </div>
                <div className="content2">
                    <div className="image">
                        <img src={profilePicture} />
                    </div>
                    <div className="form">
                        <div className="form-group">
                            pierwsza informacja: {props.order}
                        </div>
                        <div className="form-group">
                            druga informacja: {props.order}
                        </div>
                        <div className="form-group">
                            trzecia informacja: {props.order}
                        </div>
                        <div className="form-group">
                            czwarta informacja: {props.order}
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
                                        3
                                    </div>
                                </div>
                            </div>
                            <div className="form">
                                <div className="form-group3">
                                    <button className="button" className="btn">
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className="form">
                                <div className="form-group3">
                                    <button className="button" className="btn">
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