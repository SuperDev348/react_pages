import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useRouteMatch,useHistory } from "react-router-dom";

export default function AddressProfile() {
    const [streetAddress, setStreetAddress] = React.useState("");
    const [suburb, setSuburb] = React.useState("");
    const [mobileNumber, setMobileNumber] = React.useState("");
    const [emailAddress, setEmailAddress] = React.useState("");

    React.useEffect(() => {

    }, [])

    return (
        <div>
            <h2 className="fs-title">Address Profiles</h2>
            <h3 className="fs-subtitle">Your presence on the Address</h3>
            <div className="left-side adres-fild">
                <label>Street Address</label>
                <input type="text" placeholder="Enter Street Address" value={streetAddress} onChange={(event)=>setStreetAddress(event.target.value)}/>
            </div>
            <div className="right-side adres-fild">
                <label>Suburb</label>
                <input type="text" placeholder="Enter Suburb" value={suburb} onChange={(event)=>setSuburb(event.target.value)}/>
            </div>    
            <div className="left-side">
                <label>Mobile Numbar</label>
                <input type="text" placeholder="Enter Mobile Numbar" value={mobileNumber} onChange={(event)=>setMobileNumber(event.target.value)}/>
            </div>
            <div className="right-side">
                <label>Email Address</label>
                <input type="text" placeholder="Enter Email Address" value={emailAddress} onChange={(event)=>setEmailAddress(event.target.value)}/>
            </div>
        </div>
    );
}
