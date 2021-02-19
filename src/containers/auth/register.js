import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useRouteMatch,useHistory } from "react-router-dom";
// import ApiService from "../api/api.service";
import Header from "../layout/header";
import PersonalDetail from "./widgets/PersonalDetail";
import AddressProfile from "./widgets/AddressProfile";
import CreateAccount from "./widgets/CreateAccount";
 
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
  const onClickSubmit = () => {
    
  }
  React.useEffect(() => {
  }, []);

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
                  <form id="regForm">
                    {widgetState == 1 &&
                      <PersonalDetail 
                        changeInfo = {personalInfo}
                        data = {{gender, fname, lname, preferredName, title, dateOfBirth}}
                      />
                    }
                    {widgetState == 2 &&
                      <AddressProfile 
                        changeInfo = {addressInfo}
                        data = {{streetAddress, suburb, mobileNumber, emailAddress}}
                      />
                    }
                    {widgetState == 3 &&
                      <CreateAccount 
                        changeInfo = {accountInfo}
                        data = {{medicareNo, lineNo, validNo, healthCare, validTo, emergencyContactName, phoneNumber, aboriginal, torrensIslander, neither}}
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
