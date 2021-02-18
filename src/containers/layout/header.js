import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useRouteMatch,useHistory } from "react-router-dom";

export default function Header() {
    return (
        <div className="hadder">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#"><img src="images/logo.png" alt="#"/></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li><a href="#">Book a Doctor</a></li>
                            <li><a href="#">Manage Bookings</a></li>
                            <li><a href="#"> New Patient Registration</a></li>
                            <li><a href="#">Edit My Information</a></li>
                            <li className="login mobile"><a  href="#">Login</a></li>
                            <li className="drop">   
                            <select className="selectpicker" data-width="fit">
                                <option data-content='<span className="flag-icon flag-icon-us"></span> English'>English</option>
                                <option  data-content='<span className="flag-icon flag-icon-mx"></span> Español'>Español</option>
                            </select>
                            </li> 
                        </ul>
                    </div>
                </nav>
                <li className="login mobile"><a  href="#">Login</a></li>
            </div>
        </div>
    );
}