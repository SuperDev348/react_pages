import React from "react";
import { Field, reduxForm } from 'redux-form';

import RenderDatePicker from '../../../components/renderDatePicker';
import RenderField from '../../../components/renderField';

export default function CreateAccount(props) {
  return (
    <>
      <h2 className="fs-title">Create your account</h2>
      <h3 className="fs-subtitle">Fill in your credentials</h3>
      <div className="row">
        <div className="col-md-4">
          <label>Medicare No</label>
          <Field 
            type="text"
            component={RenderField}
            name="medicareNo"
            placeholder="Enter Medicare No"
          />
        </div>
        <div className="col-md-4">
          <label>Line No </label>
          <Field 
            type="text"
            component={RenderField}
            name="lineNo"
            placeholder="Enter Line No"
          />
        </div>
        <div className="col-md-4">
          <label>Valid No</label>
          <Field 
            type="text"
            component={RenderField}
            name="validNo"
            placeholder="Enter Valid No"
          />
        </div>
        <div className="col-md-4">
          <label>Pension, Health Care card or DVA Card</label>
          <Field 
            type="text"
            component={RenderField}
            name="healthCare"
            placeholder="Enter Number"
          />
        </div>
        <div className="col-md-4">
          <label>Valid to</label>
          <Field 
            type="text"
            component={RenderDatePicker}
            name="validTo"
            placeholder="Enter Date Of Birth"
          />
        </div>
        <div className="col-md-4">
          <label>Emergency Contact Name</label>
          <Field 
            type="text"
            component={RenderField}
            name="emergencyContactName"
            placeholder="Enter Contact Name"
          />
        </div>
      </div>
      <div className="left-side">
        <label>Emergency Contact Phone Numbar</label>
        <Field 
          type="text"
          component={RenderField}
          name="phoneNumber"
          placeholder="Enter Phone Numbar"
        />
      </div>
      <div className="right-side">
        <label>Do You identify as being*</label>
        <div className="form-chek">
          <Field 
            id="aboriginal"
            type="checkbox"
            component="input"
            name="aboriginal"
          />
          <label htmlFor="aboriginal">Aboriginal</label>
        </div>
        <div className="form-chek">
          <Field 
            id="torrensIslander"
            type="checkbox"
            component="input"
            name="torrensIslander"
          />
          <label htmlFor="torrensIslander">Torrens Islander</label>
        </div>
        <div className="form-chek">
          <Field 
            id="neither"
            type="checkbox"
            component="input"
            name="neither"
          />
          <label htmlFor="neither">Neither</label>
        </div>
      </div>
    </>
  );
}
