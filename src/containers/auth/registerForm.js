import React from 'react';
import { Field, reduxForm } from 'redux-form';
    
import RenderDatePicker from '../../components/renderDatePicker';
import PersonalDetail from './widgets/PersonalDetail'
import AddressProfile from "./widgets/AddressProfile";
import CreateAccount from "./widgets/CreateAccount";

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
  {name: "streetAddress", property: []},
  {name: "suburb", property: []},
  {name: "mobileNumber", property: ["number"]},
  {name: "emailAddress", property: ["email"]},
  {name: "medicareNo", property: ["number"]},
  {name: "lineNo", property: ["number"]},
  {name: "validNo", property: ["number"]},
  {name: "healthCare", property: ["number"]},
  {name: "validTo", property: []},
  {name: "emergencyContactName", property: ["number"]},
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
const RegisterForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;

  const states = [1, 2, 3];
  const [widgetState, setWidgetState] = React.useState(1);
  const [stylePersonal, setStylePersonal] = React.useState({});
  const [styleAddress, setStyleAddress] = React.useState({});
  const [styleAccount, setStyleAccount] = React.useState({});

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
  

  React.useEffect(() => {
    let stylePersonal = {display: "none"};
    let styleAddress = {display: "none"};
    let styleAccount = {display: "none"};
    if (widgetState == 1) 
      stylePersonal = {};
    else if (widgetState == 2)
      styleAddress = {};
    else if (widgetState == 3)
      styleAccount = {}
    setStylePersonal(stylePersonal);
    setStyleAddress(styleAddress);
    setStyleAccount(styleAccount);
  }, [widgetState]);

  return (
    <>
      <div className="dot">
      {states.map((value, index) => {
        if(value == widgetState)
          return <span className="step active" key={index}>{value}</span>
        else
          return <span className="step" key={index}>{value}</span>
      })}
      </div>
      <form id="regForm" autoComplete="off" onSubmit={handleSubmit}>
        <div style={stylePersonal}>
          <PersonalDetail />
        </div>
        <div style={styleAddress}>
          <AddressProfile />
        </div>
        <div style={styleAccount}>
          <CreateAccount />
        </div>
        <div className="next-prev">
          {widgetState != 1 &&
            <button className="mr-2" type="button" id="prevBtn" onClick={onClickPrev}>Previous</button>
          }
          {widgetState != 3 &&
            <button type="button" id="nextBtn" onClick={onClickNext}>Next</button>
          }
          {widgetState == 3 &&
            <button type="submit" id="nextBtn">Submit</button>
          }
        </div>
      </form>
    </>
  );
};

export default reduxForm({
  form: 'register',
  validate
})(RegisterForm);
