import React, { useState } from "react";
import profilePicture from "../userdefault.png";
import "./style.scss";

function UserPage(props) {

    return (
        <div className="userpage">
            <div className="container-user">
                <div className="user-container">
                    <div className="header">Profil</div>
                    <div className="content">
                        <div className="image">
                            <img src={profilePicture} />
                        </div>
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="Name">Imie: </label>
                            </div>
                            <div className="form-group2">
                                <label htmlFor="Name2">Norbert</label>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Surname">Nazwisko: </label>
                            </div>
                            <div className="form-group2">
                                <label htmlFor="Surname2">Gierczak</label>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Email">Email: </label>
                            </div>
                            <div className="form-group2">
                                <label htmlFor="Email1">Email@dis.ork</label>
                            </div>
                            <div className="form-group">
                                <label htmlFor="City">Miasto: </label>
                            </div>
                            <div className="form-group2">
                                <label htmlFor="City2">Kraków</label>
                            </div>
                            <div className="form-group">
                                <label htmlFor="PostalCode">Kod Pocztowy: </label>
                            </div>
                            <div className="form-group2">
                                <label htmlFor="PostalCode2">69-420</label>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Street">Ulica: </label>
                            </div>
                            <div className="form-group2">
                                <label htmlFor="Street2">Sportowa</label>
                            </div>
                        </div>
                        <div className="footer">
                            <button type="button" className="btn" >
                                Zmień hasło
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}

export default UserPage;