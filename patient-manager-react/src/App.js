import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import SecuredRoute from "./securityUtils/SecuredRoute";
import DashboardRoute from "./securityUtils/DashboardRoute";

import DoctorSearch from "./components/UserSearch/DoctorSearch.js";
import AppointmentScheduler from "./components/AppointmentScheduler.js";
import DoctorSignupForm from "./components/SignUp/DoctorSignupForm";
import PatientSignupForm from "./components/SignUp/PatientSignupForm";
import InsurerSignupForm from "./components/SignUp/InsurerSignupForm";
import Login from "./components/SignUp/LoginForm";
import DoctorDashboard from "./components/Dashboards/DoctorDashboard";
import PatientDashboard from "./components/Dashboards/PatientDashboard";
import InsurerDashboard from "./components/Dashboards/InsurerDashboard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import InvalidUserTypeLanding from "./components/InvalidUserTypeLanding";
import GeneralSignupForm from "./components/SignUp/GeneralSignupForm";
import ChatContainer from "./components/Chat/ChatContainer"
import DoctorProfileEditor from "./components/DoctorProfileEditor"


class App extends Component 
{
  render() 
  {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <span style={{marginLeft: "25vh", marginRight: "25vh"}}>
              {
                //Public routes
              }
              <Route exact path="/" component={Landing} />
              <Route exact path="/choose-role" component={GeneralSignupForm} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/patient-signup" component={PatientSignupForm} />
              <Route exact path="/doctor-signup" component={DoctorSignupForm} />
              <Route exact path="/insurer-signup" component={InsurerSignupForm} />
              <Route exact path="/find-doctors" component={DoctorSearch} />

              {
                  //Private routes only accessible to users logged in
              }
              <SecuredRoute exact path="/edit-doctor-profile/:userId" userTypeBlackList={["INS", "PAT"]} component={DoctorProfileEditor} />
              <DashboardRoute exact path="/dashboard" />
              <SecuredRoute exact path="/schedule-appointment/:userId" userTypeBlacklist={["DOC", "INS"]} component={AppointmentScheduler} />
              <SecuredRoute exact path="/chat" component={ChatContainer} />
              <SecuredRoute exact path="/permission-denied" component={InvalidUserTypeLanding} />
            </span>
            {/*<Footer />*/}
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;