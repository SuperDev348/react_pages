import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useRouteMatch,useHistory } from "react-router-dom";
import { NotificationManager } from "react-notifications";

import Header from "../layout/header";
import ApiService from "../../api/api.service";
import "./widgets/style.css";
import PersonalDetail from './widgets/PersonalDetail'
import AddressProfile from "./widgets/AddressProfile";
import CreateAccount from "./widgets/CreateAccount";

export default function Register() {
  let history = useHistory();

  const states = [1, 2, 3];
  const [widgetState, setWidgetState] = React.useState(1);
  const [stylePersonal, setStylePersonal] = React.useState({});
  const [styleAddress, setStyleAddress] = React.useState({});
  const [styleAccount, setStyleAccount] = React.useState({});

  const [gender, setGender] = React.useState("");
  const [fname, setFname] = React.useState("");
  const [lname, setLname] = React.useState("");
  const [preferredName, setPreferredName] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [dateOfBirth, setDateOfBirth] = React.useState("");
  const [streetAddress, setStreetAddress] = React.useState("");
  const [suburb, setSuburb] = React.useState("");
  const [mobileNumber, setMobileNumber] = React.useState("");
  const [emailAddress, setEmailAddress] = React.useState("");
  const [medicareNo, setMedicareNo] = React.useState("");
  const [lineNo, setLineNo] = React.useState("");
  const [validNo, setValidNo] = React.useState("");
  const [healthCare, setHealthCare] = React.useState("");
  const [validTo, setValidTo] = React.useState("");
  const [emergencyContactName, setEmerGencyContactName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [aboriginal, setAboriginal] = React.useState(false);
  const [torrensIslander, setTorrensIslander] = React.useState(false);
  const [neither, setNeither] = React.useState(false);
  
  const dateFormat = (date) => {
    let res = "";
    if(date)
      res = date.toLocaleDateString("en-US");
    return res;
  }
  const onClickPrev = () => {
    if(widgetState == 1)
      setWidgetState(widgetState);
    else
      setWidgetState(widgetState - 1);
  };
  const onClickNext = () => {
    if(widgetState == 3)
      setWidgetState(widgetState);
    else
      setWidgetState(widgetState + 1);
  }
  const personalInfo = (info) => {
    console.log(info);
    setGender(info.gender);
    setFname(info.fname);
    setLname(info.lname);
    setPreferredName(info.preferredName);
    setTitle(info.title);
    setDateOfBirth(dateFormat(info.dateOfBirth));
    onClickNext();
  };
  const addressInfo = (info) => {
    console.log(info);
    setStreetAddress(info.streetAddress);
    setSuburb(info.suburb);
    setMobileNumber(info.mobileNumber);
    setEmailAddress(info.emailAddress);
    onClickNext();
  };
  const accountInfo = (info) => {
    setMedicareNo(info.medicareNo);
    setLineNo(info.lineNo);
    setValidNo(info.validNo);
    setHealthCare(info.healthCare);
    setValidNo(info.validNo);
    setHealthCare(info.healthCare);
    setValidTo(info.validTo);
    setEmerGencyContactName(info.emergencyContactName);
    setPhoneNumber(info.phoneNumber);
    setAboriginal(info.aboriginal);
    setTorrensIslander(info.torrensIslander);
    setNeither(info.neither);
    onSubmit(info);
  };
  const onSubmit = (info) => {
    let sendData = {};
    sendData.gender = gender;
    sendData.fname = fname;
    sendData.lname = lname;
    sendData.preferredName = preferredName;
    sendData.title = title;
    sendData.dateOfBirth = dateOfBirth;
    sendData.streetAddress = streetAddress;
    sendData.suburb = suburb;
    sendData.mobileNumber = mobileNumber;
    sendData.emailAddress = emailAddress;
    sendData.medicareNo = info.medicareNo;
    sendData.lineNo = info.lineNo;
    sendData.validNo = info.validNo;
    sendData.healthCare = info.healthCare;
    sendData.validTo = dateFormat(info.validTo);
    sendData.emergencyContactName = info.emergencyContactName;
    sendData.phoneNumber = info.phoneNumber;
    sendData.aboriginal = info.aboriginal ? "Y":"N";
    sendData.torrensIslander = info.torrensIslander ? "Y":"N";
    sendData.neither = info.neither ? "Y":"N";

    console.log(sendData);
    ApiService.post("register", sendData)
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  React.useEffect(() => {
    let stylePersonal = {display: "none"};
    let styleAddress = {display: "none"};
    let styleAccount = {display: "none"};
    if (widgetState == 1) 
      stylePersonal = {};
    else if (widgetState == 2)
      styleAddress = {};
    else if (widgetState == 3)
      styleAccount = {}
    setStylePersonal(stylePersonal);
    setStyleAddress(styleAddress);
    setStyleAccount(styleAccount);
  }, [widgetState]);

  return (
    <>
      <Header />
      <div className="dashboard-saction">
        <div className="container">
          <div className="dashboard-saction-box appointment-saction">
            <div className="row">
              <div className="col-md-12">
                <div className="appointment-box">
                  <div className="next-lable">Register New Patient</div>      
                  
                  <div className="dot">
                  {states.map((value, index) => {
                    if(value == widgetState)
                      return <span className="step active" key={index}>{value}</span>
                    else
                      return <span className="step" key={index}>{value}</span>
                  })}
                  </div>
                  <div style={stylePersonal}>
                    <PersonalDetail 
                      onSubmit = {personalInfo}
                    />
                  </div>
                  <div style={styleAddress}>
                    <AddressProfile 
                      onPrev = {onClickPrev}
                      onSubmit = {addressInfo}
                    />
                  </div>
                  <div style={styleAccount}>
                    <CreateAccount 
                      onPrev = {onClickPrev}
                      onSubmit = {accountInfo}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="back-next-btn">
            <a href="#" className="back-btn">Back</a>
            <a href="#" className="register-btn">Register</a>
          </div>
        </div>
      </div>
    </>
  );
}
