import React from "react";
import { Field, reduxForm } from 'redux-form';

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
  {name: "streetAddress", property: []},
  {name: "suburb", property: []},
  {name: "mobileNumber", property: ["number"]},
  {name: "emailAddress", property: ["email"]},
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
const AddressProfile = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;

  return (
    <form className="regForm" autoComplete="off" onSubmit={handleSubmit}>
      <h2 className="fs-title">Address Profiles</h2>
      <h3 className="fs-subtitle">Your presence on the Address</h3>      
      <div className="left-side adres-fild">
        <label>Street Address</label>
        <Field 
          type="text"
          component={RenderField}
          name="streetAddress"
          placeholder="Enter Street Address"
        />
      </div>
      <div className="right-side adres-fild">
        <label>Suburb</label>
        <Field 
          type="text"
          component={RenderField}
          name="suburb"
          placeholder="Enter Suburb"
        />
      </div>
      <div className="left-side">
        <label>Mobile Numbar</label>
        <Field 
          type="text"
          component={RenderField}
          name="mobileNumber"
          placeholder="Enter Mobile Number"
        />
      </div>
      <div className="right-side">
        <label>Email Address</label>
        <Field 
          type="text"
          component={RenderField}
          name="emailAddress"
          placeholder="Enter Email Address"
        />
      </div>
      <div className="next-prev">
        <button className="mr-2" type="button" id="prevBtn" onClick={props.onPrev}>Previous</button>
        <button type="submit" id="nextBtn">Next</button>
      </div>
    </form>
  );
}

export default reduxForm({
  form: 'addressProfile',
  validate
})(AddressProfile);
