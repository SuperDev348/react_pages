import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useRouteMatch,useHistory } from "react-router-dom";
import {Radio, 
  RadioGroup, 
  FormControlLabel,
  Grid,
  TextField,
} from "@material-ui/core"

export default function PersonalDetail(props) {
  const {data} = props;

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
        <input type="text" name="fname" placeholder="Enter First Name" value={fname} 
          onChange={ (event) => setFname(event.target.value)}
        />
      </div>
      <div className="right-side">
        <label>Last Name</label>
        <input type="text" name="lname" placeholder="Enter ast Name" value={lname} 
          onChange={(event) => setLname(event.target.value)}
        />
      </div>
      <div className="left-side">
        <label>Preferred Name </label>
        <input type="text" name="lname" placeholder="Enter Preferred Name" value={preferredName} 
          onChange={(event) => setPreferredName(event.target.value)}
        />
      </div>
      <div className="right-side">
        <label>Title</label>
        <input type="text" name="lname" placeholder="Enter Title" value={title} 
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div className="left-side">
        <label>Date Of Birth</label>
        <input type="text" name="lname" placeholder="Enter Date Of Birth" value={dateOfBirth} 
          onChange={(event) => setDateOfBirth(event.target.value)}
        />
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
