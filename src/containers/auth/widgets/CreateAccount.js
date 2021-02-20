import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useRouteMatch,useHistory } from "react-router-dom";
import DatePicker from "react-datepicker";

import Input from "../../../components/input"

export default function CreateAccount(props) {
  const {data, errors} = props;

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
  const changeInfo = () => {
    var info = {};
    info.medicareNo = medicareNo;
    info.lineNo = lineNo;
    info.validNo = validNo;
    info.healthCare = healthCare;
    info.validTo = validTo;
    info.emergencyContactName = emergencyContactName;
    info.phoneNumber = phoneNumber;
    info.aboriginal = aboriginal;
    info.torrensIslander = torrensIslander;
    info.neither = neither;
    props.changeInfo(info);
  };

  React.useEffect(() => {
    changeInfo();
  }, [medicareNo, lineNo, validNo, healthCare, validTo, emergencyContactName, phoneNumber, aboriginal, torrensIslander, neither])
  React.useEffect(() => {
    setMedicareNo(data.medicareNo);
    setLineNo(data.lineNo);
    setValidNo(data.validNo);
    setHealthCare(data.healthCare);
    setValidTo(data.validTo);
    setEmergencyContactName(data.emergencyContactName);
    setPhoneNumber(data.phoneNumber);
    setAboriginal(data.aboriginal);
    setTorrensIslander(data.torrensIslander);
    setNeither(data.neither);
  }, [])

  return (
    <div>
      <h2 className="fs-title">Create your account</h2>
      <h3 className="fs-subtitle">Fill in your credentials</h3>
      <div className="row">
        <div className="col-md-4">
          <label>Medicare No</label>
          <Input 
            type={"text"} 
            name={"medicareNo"} 
            placeholder={"Enter Medicare No"} 
            value={medicareNo}
            onChange={ (event) => setMedicareNo(event.target.value)}
            error = {errors.medicareNo}
          />
          {/* <input type="text" placeholder="Enter Medicare No" value={medicareNo} onChange={(event) => setMedicareNo(event.target.value)}/> */}
        </div>
        <div className="col-md-4">
          <label>Line No </label>
          <Input 
            type={"text"} 
            name={"lineNo"} 
            placeholder={"Enter Line No"} 
            value={lineNo}
            onChange={ (event) => setLineNo(event.target.value)}
            error = {errors.lineNo}
          />
          {/* <input type="text" placeholder="Enter Line No" value={lineNo} onChange={(event) => setLineNo(event.target.value)}/> */}
        </div>
        <div className="col-md-4">
          <label>Valid No</label>
          <Input 
            type={"text"} 
            name={"validNo"} 
            placeholder={"Enter Valid No"} 
            value={validNo}
            onChange={ (event) => setValidNo(event.target.value)}
            error = {errors.validNo}
          />
          {/* <input type="text" placeholder="Enter Valid No" value={validNo} onChange={(event) => setValidNo(event.target.value)}/> */}
        </div>
        <div className="col-md-4">
          <label>Pension, Health Care card or DVA Card</label>
          <Input 
            type={"text"} 
            name={"healthCare"} 
            placeholder={"Enter Number"} 
            value={healthCare}
            onChange={ (event) => setHealthCare(event.target.value)}
            error = {errors.healthCare}
          />
          {/* <input type="text" placeholder="Enter Numbar" value={healthCare} onChange={(event) => setHealthCare(event.target.value)}/> */}
        </div>
        <div className="col-md-4">
          <label>Valid to</label>
          <DatePicker
            selected={ validTo }
            onChange={ (date) => setValidTo(date) }
            name="validTo"
            dateFormat="MM/dd/yyyy"
          />
          {errors.validTo ? <div style={{color: "red", fontSize: 12, paddingLeft: 12}}>{errors.validTo}</div> : <div style={{paddingBottom: 18}}> </div>} 
          {/* <input type="text" placeholder="Enter Date Of Birth" value={validTo} onChange={(event) => setValidTo(event.target.value)}/> */}
        </div>
        <div className="col-md-4">
          <label>Emergency Contact Name</label>
          <Input 
            type={"text"} 
            name={"emergencyContactName"} 
            placeholder={"Enter Contact Name"} 
            value={emergencyContactName}
            onChange={ (event) => setEmergencyContactName(event.target.value)}
            error = {errors.emergencyContactName}
          />
          {/* <input type="text" placeholder="Enter Contact Name" value={emergencyContactName} onChange={(event) => setEmergencyContactName(event.target.value)}/> */}
        </div>
      </div>
      <div className="left-side">
        <label>Emergency Contact Phone Numbar</label>
        <Input 
          type={"text"} 
          name={"phoneNumber"} 
          placeholder={"Enter Phone Numbar"} 
          value={phoneNumber}
          onChange={ (event) => setPhoneNumber(event.target.value)}
          error = {errors.phoneNumber}
        />
        {/* <input type="text" placeholder="Enter Phone Numbar" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)}/> */}
      </div>
      <div className="right-side">
        <label>Do You identify as being*</label>
        <div className="form-chek">
          <input type="checkbox" id="aboriginal" checked={aboriginal} onChange={(event) => setAboriginal(event.target.checked)}/>
          <label htmlFor="aboriginal">Aboriginal</label>
        </div>
        <div className="form-chek">
          <input type="checkbox" id="torrensIslander" checked={torrensIslander} onChange={(event) => setTorrensIslander(event.target.checked)}/>
          <label htmlFor="torrensIslander">Torrens Islander</label>
        </div>
        <div className="form-chek">
          <input type="checkbox" id="neither" checked={neither} onChange={(event) => setNeither(event.target.checked)}/>
          <label htmlFor="neither">Neither</label>
        </div>
      </div>
    </div>
  );
}
