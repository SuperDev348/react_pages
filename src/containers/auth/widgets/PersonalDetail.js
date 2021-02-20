import React from "react";
import DatePicker from 'react-datepicker';
import { useDispatch, useSelector } from "react-redux";
import { Link, useRouteMatch,useHistory } from "react-router-dom";
import {Radio, 
  RadioGroup, 
  FormControlLabel,
  Grid,
  TextField,
} from "@material-ui/core"

import Input from "../../../components/input"

export default function PersonalDetail(props) {
  const {data, errors} = props;

  const [gender, setGender] = React.useState("female");
  const [fname, setFname] = React.useState("");
  const [lname, setLname] = React.useState("");
  const [preferredName, setPreferredName] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [dateOfBirth, setDateOfBirth] = React.useState("");
  const changeInfo = () => {
    var info = {};
    info.gender = gender;
    info.fname = fname;
    info.lname = lname;
    info.preferredName = preferredName;
    info.title = title;
    info.dateOfBirth = dateOfBirth;
    props.changeInfo(info);
  };

  React.useEffect(() => {
    changeInfo();
  }, [gender, fname, lname, preferredName, title, dateOfBirth])
  React.useEffect(() => {
    setGender(data.gender);
    setFname(data.fname);
    setLname(data.lname);
    setPreferredName(data.preferredName);
    setTitle(data.title);
    setDateOfBirth(data.dateOfBirth);
  }, [])

  return (
    <div>
      <h2 className="fs-title">Personal Details</h2>
      <h3 className="fs-subtitle">Tell us something more about you</h3>
      <div className="left-side">
        <label>First Name</label>
        <Input 
          type={"text"} 
          name={"fname"} 
          placeholder={"Enter First Name"} 
          value={fname}
          onChange={ (event) => setFname(event.target.value)}
          error = {errors.fname}
        />
      </div>
      <div className="right-side">
        <label>Last Name</label>
        <Input 
          type={"text"} 
          name={"lname"} 
          placeholder={"Enter ast Name"} 
          value={lname}
          onChange={ (event) => setLname(event.target.value)}
          error = {errors.lname}
        />
      </div>
      <div className="left-side">
        <label>Preferred Name </label>
        <Input 
          type={"text"} 
          name={"preferredName"} 
          placeholder={"Enter First Name"} 
          value={preferredName}
          onChange={ (event) => setPreferredName(event.target.value)}
          error = {errors.preferredName}
        />
      </div>
      <div className="right-side">
        <label>Title</label>
        <Input 
          type={"text"} 
          name={"title"} 
          placeholder={"Enter First Name"} 
          value={title}
          onChange={ (event) => setTitle(event.target.value)}
          error = {errors.title}
        />
      </div>
      <div className="left-side">
        <label>Date Of Birth</label>
        <DatePicker
          selected={ dateOfBirth }
          onChange={ (date) => setDateOfBirth(date) }
          name="Date of Birth"
          dateFormat="MM/dd/yyyy"
        />
        {errors.dateOfBirth ? <div style={{color: "red", fontSize: 12, paddingLeft: 12}}>{errors.dateOfBirth}</div> : <div style={{paddingBottom: 18}}> </div>} 
      </div>
      <div className="right-side">
        <label>Gender</label>
        <div className="radio">
          <input id="female" name="radio" type="radio" value="female" checked={gender == "female"} 
            onChange={(event) => setGender(event.target.value)}
          />
          <label className="radio-label" htmlFor="female">Female</label>
        </div>
        <div className="radio">
          <input id="male" name="radio" type="radio" value="male" checked={gender == "male"} 
            onChange={(event) => setGender(event.target.value)}
          />
          <label  className="radio-label" htmlFor="male">Male</label>
        </div>
      </div>
    </div>
  );
}
