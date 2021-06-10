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
  {name: "fname", property: []},
  {name: "lname", property: []},
  {name: "preferredName", property: []},
  {name: "title", property: []},
  {name: "dateOfBirth", property: []},
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
const PersonalDetail = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;

  return (
    <form className="regForm" autoComplete="off" onSubmit={handleSubmit}>
      <h2 className="fs-title">Personal Details</h2>
      <h3 className="fs-subtitle">Tell us something more about you</h3>
      <div className="left-side">
        <label>First Name</label>
        <Field 
          type="text"
          component={RenderField}
          name="fname"
          placeholder="Enter First Name"
        />
      </div>
      <div className="right-side">
        <label>Last Name</label>
        <Field 
          type="text"
          component={RenderField}
          name="lname"
          placeholder="Enter Last Name" 
        />
      </div>
      <div className="left-side">
        <label>Preferred Name </label>
        <Field 
          type="text" 
          name="preferredName" 
          component={RenderField}
          placeholder="Enter Preferred Name"
        />
      </div>
      <div className="right-side">
        <label>Title</label>
        <Field 
          type="text"
          name="title"
          component={RenderField}
          placeholder="Enter Title" 
        />
      </div>
      <div className="left-side">
        <label>Date Of Birth</label>
        <Field
          type="text"
          name="dateOfBirth"
          component={RenderDatePicker}
          placeholder="Enter Date Of Birth"
        />
      </div>
      <div className="right-side">
        <label>Gender</label>
        <div className="radio">
          <Field id="female" name="gender" component="input" type="radio" value="female"/>
          <label className="radio-label" htmlFor="female">Female</label>
        </div>
        <div className="radio">
          <Field id="male" name="gender" component="input" type="radio" value="male" />
          <label  className="radio-label" htmlFor="male">Male</label>
        </div>
      </div>
      <div className="next-prev">
        <button type="submit" id="nextBtn">Next</button>
      </div>
    </form>
  );
}

export default reduxForm({
  form: 'personalDetail',
  validate,
  initialValues: { gender: "female" },
})(PersonalDetail);
