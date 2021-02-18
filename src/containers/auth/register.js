import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useRouteMatch,useHistory } from "react-router-dom";
// import ApiService from "../api/api.service";
import Header from "../layout/header";
import PersonalDetail from "./widgets/PersonalDetail";
import AddressProfile from "./widgets/AddressProfile";
import CreateAccount from "./widgets/CreateAccount";
 
// const widgetStyle = {
//     width: "350px",
//     padding: "25px 45px",
//     margin: "10px",
//     border: "dotted 2px gray",
// }
// const itemValueStyle ={
//     fontSize: "20px"
// }
// const itemTitleStyle = {
//     color: "gray",
// }

export default function Register() {
  let history = useHistory();
  const dispatch = useDispatch();
  const states = [1, 2, 3];
  const [widgetState, setWidgetState] = React.useState(1);
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
  const onClickSubmit = () => {
    
  }
  React.useEffect(() => {
  }, []);    

  return (
    <>
      <Header />
      <div className="dashboard-saction">
        <div className="container">
          <div className="dashboard-saction-box appointment-saction">
            <div className="row">
              <div className="col-md-12">
                <div className="appointment-box">
                  <div className="next-lable">Register New Patient</div>
                  <div className="dot">
                  {states.map((value, index) => {
                    if(value == widgetState)
                      return <span className="step active" key={index}>{value}</span>
                    else
                      return <span className="step" key={index}>{value}</span>
                  })}
                  </div>
                  <form id="regForm">
                    {widgetState == 1 &&
                      <PersonalDetail />
                    }
                    {widgetState == 2 &&
                      <AddressProfile />
                    }
                    {widgetState == 3 &&
                      <CreateAccount />
                    }
                    <div className="next-prev">
                      {widgetState != 1 &&
                        <button className="mr-2" type="button" id="prevBtn" onClick={onClickPrev}>Previous</button>
                      }
                      {widgetState != 3 &&
                        <button type="button" id="nextBtn" onClick={onClickNext}>Next</button>
                      }
                      {widgetState == 3 &&
                        <button type="button" id="nextBtn" onClick={onClickSubmit}>Submit</button>
                      }
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="back-next-btn">
            <a href="#" className="back-btn">Back</a>
            <a href="#" className="register-btn">Register</a>
          </div>
        </div>
      </div>
    </>
  );
}
