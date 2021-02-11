import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useRouteMatch,useHistory } from "react-router-dom";
import {Radio, RadioGroup, FormControlLabel} from "@material-ui/core"

export default function PersonalDetail() {
  const [gender, setGender] = React.useState("female");

  return (
    <div>
      <h2 className="fs-title">Personal Details</h2>
      <h3 className="fs-subtitle">Tell us something more about you</h3>
      <div className="left-side">
        <label>First Name</label>
        <input type="text" name="fname" placeholder="Enter First Name"/>
      </div>
      <div className="right-side">
        <label>Last Name</label>
        <input type="text" name="lname" placeholder="Enter ast Name"/>
      </div>
      <div className="left-side">
        <label>Preferred Name </label>
        <input type="text" name="lname" placeholder="Enter Preferred Name"/>
      </div>
      <div className="right-side">
        <label>Title</label>
        <input type="text" name="lname" placeholder="Enter Title"/>
      </div>
      <div className="left-side">
        <label>Date Of Birth</label>
        <input type="text" name="lname" placeholder="Enter Date Of Birth"/>
      </div>
      <div className="right-side">
        <label>Gender</label>
        <div className="radio">
          <input id="female" name="radio" type="radio"/>
          <label className="radio-label">Female</label>
        </div>
        <div className="radio">
          <input id="male" name="radio" type="radio"/>
          <label  className="radio-label">Male</label>
        </div>
      </div>
    </div>
  );
}
