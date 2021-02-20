import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useRouteMatch,useHistory } from "react-router-dom";

import Input from "../../../components/input"

export default function AddressProfile(props) {
  const {data, errors} = props;
  
  const [streetAddress, setStreetAddress] = React.useState("");
  const [suburb, setSuburb] = React.useState("");
  const [mobileNumber, setMobileNumber] = React.useState("");
  const [emailAddress, setEmailAddress] = React.useState("");
  const changeInfo = () => {
    var info = {};
    info.streetAddress = streetAddress;
    info.suburb = suburb;
    info.mobileNumber = mobileNumber;
    info.emailAddress = emailAddress;
    props.changeInfo(info);
  };

  React.useEffect(() => {
    changeInfo();
  }, [streetAddress, suburb, mobileNumber, emailAddress])
  React.useEffect(() => {
    setStreetAddress(data.streetAddress);
    setSuburb(data.suburb);
    setMobileNumber(data.mobileNumber);
    setEmailAddress(data.emailAddress);
  }, [])

  return (
    <div>
      <h2 className="fs-title">Address Profiles</h2>
      <h3 className="fs-subtitle">Your presence on the Address</h3>
      <div className="left-side adres-fild">
        <label>Street Address</label>
        <Input 
          type={"text"} 
          name={"streetAddress"} 
          placeholder={"Enter Street Address"} 
          value={streetAddress}
          onChange={ (event) => setStreetAddress(event.target.value)}
          error = {errors.streetAddress}
        />
        {/* <input type="text" placeholder="Enter Street Address" value={streetAddress} onChange={(event)=>setStreetAddress(event.target.value)}/> */}
      </div>
      <div className="right-side adres-fild">
        <label>Suburb</label>
        <Input 
          type={"text"} 
          name={"suburb"} 
          placeholder={"Enter Suburb"} 
          value={suburb}
          onChange={ (event) => setSuburb(event.target.value)}
          error = {errors.suburb}
        />
        {/* <input type="text" placeholder="Enter Suburb" value={suburb} onChange={(event)=>setSuburb(event.target.value)}/> */}
      </div>
      <div className="left-side">
        <label>Mobile Numbar</label>
        <Input 
          type={"text"} 
          name={"mobileNumber"} 
          placeholder={"Enter Mobile Number"} 
          value={mobileNumber}
          onChange={ (event) => setMobileNumber(event.target.value)}
          error = {errors.mobileNumber}
        />
        {/* <input type="text" placeholder="Enter Mobile Numbar" value={mobileNumber} onChange={(event)=>setMobileNumber(event.target.value)}/> */}
      </div>
      <div className="right-side">
        <label>Email Address</label>
        <Input 
          type={"text"} 
          name={"emailAddress"} 
          placeholder={"Enter Email Address"} 
          value={emailAddress}
          onChange={ (event) => setEmailAddress(event.target.value)}
          error = {errors.emailAddress}
        />
        {/* <input type="text" placeholder="Enter Email Address" value={emailAddress} onChange={(event)=>setEmailAddress(event.target.value)}/> */}
      </div>
    </div>
  );
}
