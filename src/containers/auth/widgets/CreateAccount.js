import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useRouteMatch,useHistory } from "react-router-dom";

export default function CreateAccount() {
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

    React.useEffect(() => {
    }, [])

    return (
        <div>   
            <h2 className="fs-title">Create your account</h2>
            <h3 className="fs-subtitle">Fill in your credentials</h3>
            <div className="row">
                <div className="col-md-4">
                    <label>Medicare No</label>
                    <input type="text" placeholder="Enter Medicare No" value={medicareNo} onChange={(event) => setMedicareNo(event.target.value)}/>
                </div>
                <div className="col-md-4">
                    <label>Line No </label>
                    <input type="text" placeholder="Enter Line No" value={lineNo} onChange={(event) => setLineNo(event.target.value)}/>
                </div>
                <div className="col-md-4">
                    <label>Valid No</label>
                    <input type="text" placeholder="Enter Valid No" value={validNo} onChange={(event) => setValidNo(event.target.value)}/>
                </div>
                <div className="col-md-4">
                    <label>Pension, Health Care card or DVA Card</label>
                    <input type="text" placeholder="Enter Numbar" value={healthCare} onChange={(event) => setHealthCare(event.target.value)}/>
                </div>
                <div className="col-md-4">
                    <label>Valid to</label>
                    <input type="text" placeholder="Enter Date Of Birth" value={validTo} onChange={(event) => setValidTo(event.target.value)}/>
                </div>
                <div className="col-md-4">
                    <label>Emergency Contact Name</label>
                    <input type="text" placeholder="Enter Contact Name" value={emergencyContactName} onChange={(event) => setEmergencyContactName(event.target.value)}/>
                </div>
            </div>
            <div className="left-side">
                <label>Emergency Contact Phone Numbar</label>
                <input type="text" placeholder="Enter Phone Numbar" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)}/>
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
