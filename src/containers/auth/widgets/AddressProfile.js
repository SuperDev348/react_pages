import React from "react";
import { Field, reduxForm } from 'redux-form';

import RenderField from '../../../components/renderField';

export default function AddressProfile(props) {
  return (
    <>
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
    </>
  );
}
