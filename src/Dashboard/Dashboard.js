import React from "react";
import { Route } from "react-router-dom";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import "./Dashboard.css";
import NavbarDashboard from "./NavbarDashboard";
import AddArticle from "./pages/AddArticle";
import AddWriter from "./pages/AddWriter";
// import logo from "../assets/logo11.png";
// import { NavLink } from "react-router-dom";
import { Redirect } from "react-router-dom";
import AddVideo from "./pages/AddVideo";
import AddSeries from "./pages/AddSeries";




const Dashboard = () => {
  const token = localStorage.getItem("token");
  // console.log("from dash 14 :", token);
  if (!token) {
    return <Redirect to="/login" />;
  } 
    return (
      <div className="dashboard">
        <div className="dashboard-container">
          <Router>
            <div className="dashboard-right">
              <NavbarDashboard />
            </div>
            <div className="dashboard-left">
              <Switch>
              <Route path='/dashboard/' exact component={AddWriter}/>
                <Route path="/dashboard/addwriter" component={AddWriter} />
                <Route path="/dashboard/addarticle" component={AddArticle} />
                <Route path="/dashboard/addvideo" component={AddVideo} />
                <Route path="/dashboard/addseries" component={AddSeries} />
              </Switch>
            </div>
          </Router>
        </div>
      </div>
    );
  
};

export default Dashboard;
