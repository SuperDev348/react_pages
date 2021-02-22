import React from "react";
import { Field, reduxForm } from 'redux-form';

import RenderDatePicker from '../../../components/renderDatePicker';
import RenderField from '../../../components/renderField';

const checkValidate = (value, property = []) => {
  let message= "";
  let isError = false;
  if(!value) {
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
  {name: "medicareNo", property: ["number"]},
  {name: "lineNo", property: ["number"]},
  {name: "validNo", property: ["number"]},
  {name: "healthCare", property: ["number"]},
  {name: "validTo", property: []},
  {name: "emergencyContactName", property: []},
  {name: "phoneNumber", property: ["number"]},
]
const validate = (values) => {
  let errors = {};
  let tmp = {};
  validateFields.forEach(( item, index) => {
    tmp = checkValidate(values[item.name], item.property);
    if(tmp.error) {
      errors[item.name] = tmp.message;
    }
  })
  return errors;
};
const CreateAccount = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;

  return (
    <form className="regForm" autoComplete="off" onSubmit={handleSubmit}>
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
      <div className="next-prev">
        <button className="mr-2" type="button" id="prevBtn" onClick={props.onPrev}>Previous</button>
        <button type="submit" id="nextBtn">Submit</button>
      </div>
    </form>
  );
}

export default reduxForm({
  form: 'createAccount',
  validate
})(CreateAccount);
