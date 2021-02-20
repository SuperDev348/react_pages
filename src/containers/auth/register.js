import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useRouteMatch,useHistory } from "react-router-dom";

import { NotificationManager } from "react-notifications";

import Header from "../layout/header";
import PersonalDetail from "./widgets/PersonalDetail";
import AddressProfile from "./widgets/AddressProfile";
import CreateAccount from "./widgets/CreateAccount";
import ApiService from "../../api/api.service";
import "./widgets/style.css";
 
// const widgetStyle = {
//     width: "350px",
//     padding: "25px 45px",
//     margin: "10px",
//     border: "dotted 2px gray",
// }
// const itemValueStyle ={
//     fontSize: "20px"
// }
// const itemTitleStyle = {
//     color: "gray",
// }

export default function Register() {
  let history = useHistory();
  const dispatch = useDispatch();
  const states = [1, 2, 3];
  const [widgetState, setWidgetState] = React.useState(1);
  const [errors, setErrors] = React.useState({});

  const [gender, setGender] = React.useState("female");
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
  const [emergencyContactName, setEmergencyContactName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [aboriginal, setAboriginal] = React.useState(false);
  const [torrensIslander, setTorrensIslander] = React.useState(false);
  const [neither, setNeither] = React.useState(false);

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
    setGender(info.gender);
    setFname(info.fname);
    setLname(info.lname);
    setPreferredName(info.preferredName);
    setTitle(info.title);
    setDateOfBirth(info.dateOfBirth);
  };
  const addressInfo = (info) => {
    setStreetAddress(info.streetAddress);
    setSuburb(info.suburb);
    setMobileNumber(info.mobileNumber);
    setEmailAddress(info.emailAddress);
  };
  const accountInfo = (info) => {
    setMedicareNo(info.medicareNo);
    setLineNo(info.lineNo);
    setValidNo(info.validNo);
    setHealthCare(info.healthCare);
    setValidTo(info.validTo);
    setEmergencyContactName(info.emergencyContactName);
    setPhoneNumber(info.phoneNumber);
    setAboriginal(info.aboriginal);
    setTorrensIslander(info.torrensIslander);
    setNeither(info.neither);
  };
  const checkValidate = (value, property = []) => {
    let message= "";
    let isError = false;
    if(value == "") {
      message = "this field is require";
      isError = true;
    }
    else {
      if(property.includes("number")) {
        if(!value.match(/^[0-9]+$/)){
          message = "this field is number";
          isError = true;
        } 
      }
      if(property.includes("email")) {
        let lastAtPos = value.lastIndexOf('@');
        let lastDotPos = value.lastIndexOf('.');

        if (!(lastAtPos < lastDotPos && lastAtPos > 0 && value.indexOf('@@') == -1 && lastDotPos > 2 && (value.length - lastDotPos) > 2)) {
          message = "this field is email";
          isError = true;
        }
      }
    }
    return {error: isError, message};
  };
  const validateFields = [
    {name: "fname", value: fname, property: []},
    {name: "lname", value: lname, property: []},
    {name: "preferredName", value: preferredName, property: []},
    {name: "title", value: title, property: []},
    {name: "dateOfBirth", value: dateOfBirth, property: []},
    {name: "streetAddress", value: streetAddress, property: []},
    {name: "suburb", value: suburb, property: []},
    {name: "mobileNumber", value: mobileNumber, property: ["number"]},
    {name: "emailAddress", value: emailAddress, property: ["email"]},
    {name: "medicareNo", value: medicareNo, property: ["number"]},
    {name: "lineNo", value: lineNo, property: ["number"]},
    {name: "validNo", value: validNo, property: ["number"]},
    {name: "healthCare", value: healthCare, property: ["number"]},
    {name: "validTo", value: validTo, property: []},
    {name: "emergencyContactName", value: emergencyContactName, property: ["number"]},
    {name: "phoneNumber", value: phoneNumber, property: ["number"]},
  ]
  const validate = () => {
    let res = true;
    let errors = {};
    // personalDetail
    let tmp = {};
    validateFields.forEach(( item, index) => {
      tmp = checkValidate(item.value, item.property);
      if(tmp.error) {
        errors[item.name] = tmp.message;
        res = false;
      }
    })
    setErrors(errors);
    return res;
  };
  const onClickSubmit = () => {
    // NotificationManager.success("submit", "submit text", 1000);
    if(!validate()) {
      NotificationManager.warning("Please input all required fields!", "Error",  1000);
      return;
    }
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
    sendData.medicareNo = medicareNo;
    sendData.lineNo = lineNo;
    sendData.validNo = validNo;
    sendData.healthCare = healthCare;
    sendData.validTo = validTo;
    sendData.emergencyContactName = emergencyContactName;
    sendData.phoneNumber = phoneNumber;
    sendData.aboriginal = aboriginal;
    sendData.torrensIslander = torrensIslander;
    sendData.neither = neither;

    console.log(sendData);
    ApiService.post("", sendData)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      })
  }
  React.useEffect(() => {
    validate();
  }, [fname, lname, preferredName, title, dateOfBirth,
    streetAddress, suburb, mobileNumber, emailAddress,
    medicareNo, lineNo, validNo, healthCare, validTo, emergencyContactName, phoneNumber, aboriginal, torrensIslander, neither
  ]);

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
                  <form id="regForm" autoComplete="off">
                    {widgetState == 1 &&
                      <PersonalDetail
                        changeInfo = {personalInfo}
                        data = {{gender, fname, lname, preferredName, title, dateOfBirth}}
                        errors = {errors}
                      />
                    }
                    {widgetState == 2 &&
                      <AddressProfile 
                        changeInfo = {addressInfo}
                        data = {{streetAddress, suburb, mobileNumber, emailAddress}}
                        errors = {errors}
                      />
                    }
                    {widgetState == 3 &&
                      <CreateAccount 
                        changeInfo = {accountInfo}
                        data = {{medicareNo, lineNo, validNo, healthCare, validTo, emergencyContactName, phoneNumber, aboriginal, torrensIslander, neither}}
                        errors = {errors}
                      />
                    }
                    <div className="next-prev">
                      {widgetState != 1 &&
                        <button className="mr-2" type="button" id="prevBtn" onClick={onClickPrev}>Previous</button>
                      }
                      {widgetState != 3 &&
                        <button type="button" id="nextBtn" onClick={onClickNext}>Next</button>
                      }
                      {widgetState == 3 &&
                        <button type="button" id="nextBtn" onClick={onClickSubmit}>Submit</button>
                      }
                    </div>
                  </form>
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
