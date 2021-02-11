import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useRouteMatch,useHistory } from "react-router-dom";

export default function AddressProfile() {
  return (
    <div>
        <h2 className="fs-title">Address Profiles</h2>
        <h3 className="fs-subtitle">Your presence on the Address</h3>
        <div className="left-side adres-fild">
            <label>Street Address</label>
            <input type="text" name="fname" placeholder="Enter Street Address"/>
        </div>
        <div className="right-side adres-fild">
            <label>Suburb</label>
            <input type="text" name="lname" placeholder="Enter Suburb"/>
        </div>
        <div className="left-side">
            <label>Mobile Numbar</label>
            <input type="text" name="lname" placeholder="Enter Mobile Numbar"/>
        </div>
        <div className="right-side">
            <label>Email Address</label>
            <input type="text" name="email" placeholder="Enter Email Address"/>
        </div>
    </div>
  );
}
