import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useRouteMatch,useHistory } from "react-router-dom";

export default function CreateAccount() {
  return (
    <div>
        <h2 className="fs-title">Create your account</h2>
        <h3 className="fs-subtitle">Fill in your credentials</h3>
        <div className="row">
        <div className="col-md-4">
            <label>Medicare No</label>
            <input type="text" name="lname" placeholder="Enter Medicare No"/>
        </div>
        <div className="col-md-4">
            <label>Line No </label>
            <input type="text" name="lname" placeholder="Enter Line No"/>
        </div>
        <div className="col-md-4">
            <label>Valid No</label>
            <input type="text" name="lname" placeholder="Enter Valid No"/>
        </div>
        <div className="col-md-4">
            <label>Pension, Health Care card or DVA Card</label>
            <input type="text" name="lname" placeholder="Enter Numbar"/>
        </div>
        <div className="col-md-4">
            <label>Valid to</label>
            <input type="text" name="lname" placeholder="Enter Date Of Birth"/>
        </div>
        <div className="col-md-4">
            <label>Emergency Contact Name</label>
            <input type="text" name="lname" placeholder="Enter Contact Name"/>
        </div>
        </div>
        <div className="left-side">
        <label>Emergency Contact Phone Numbar</label>
        <input type="text" name="lname" placeholder="Enter Phone Numbar"/>
        </div>
        <div className="right-side">
        <label>Do You identify as being*</label>
        <div className="form-chek">
            <input type="checkbox" id="html"/>
            <label>Aboriginal</label>
        </div>
        <div className="form-chek">
            <input type="checkbox" id="css"/>
            <label>Torrens Islander</label>
        </div>
        <div className="form-chek">
            <input type="checkbox" id="javascript"/>
            <label>Neither</label>
        </div>
        </div>
    </div>
  );
}
