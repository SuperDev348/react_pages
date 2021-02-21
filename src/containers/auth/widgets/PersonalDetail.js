import React from "react";
import { Field, reduxForm } from 'redux-form';

import RenderDatePicker from '../../../components/renderDatePicker';
import RenderField from '../../../components/renderField';

export default function PersonalDetail(props) {
  return (
    <>
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
          <Field id="female" name="gender" component="input" type="radio" value="female" checked={true}/>
          <label className="radio-label" htmlFor="female">Female</label>
        </div>
        <div className="radio">
          <Field id="male" name="gender" component="input" type="radio" value="male" />
          <label  className="radio-label" htmlFor="male">Male</label>
        </div>
      </div>
    </>
  );
}
