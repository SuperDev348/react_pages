import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useRouteMatch,useHistory } from "react-router-dom";
import { NotificationManager } from "react-notifications";

import Header from "../layout/header";
import RegisterForm from "./registerForm";
import ApiService from "../../api/api.service";
import "./widgets/style.css";

export default function Register() {
  let history = useHistory();
  
  const dateFormat = (date) => {
    let res = "";
    if(date)
      res = date.toLocaleDateString("en-US");
    return res;
  }
  const onSubmit = (values) => {
    let sendData = {};
    sendData.gender = values.gender;
    sendData.fname = values.fname;
    sendData.lname = values.lname;
    sendData.preferredName = values.preferredName;
    sendData.title = values.title;
    sendData.dateOfBirth = dateFormat(values.dateOfBirth);
    sendData.streetAddress = values.streetAddress;
    sendData.suburb = values.suburb;
    sendData.mobileNumber = values.mobileNumber;
    sendData.emailAddress = values.emailAddress;
    sendData.medicareNo = values.medicareNo;
    sendData.lineNo = values.lineNo;
    sendData.validNo = values.validNo;
    sendData.healthCare = values.healthCare;
    sendData.validTo = dateFormat(values.validTo);
    sendData.emergencyContactName = values.emergencyContactName;
    sendData.phoneNumber = values.phoneNumber;
    sendData.aboriginal = values.aboriginal ? "Y":"N";
    sendData.torrensIslander = values.torrensIslander ? "Y":"N";
    sendData.neither = values.neither ? "Y":"N";

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
                  
                  <RegisterForm onSubmit={onSubmit} />
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
