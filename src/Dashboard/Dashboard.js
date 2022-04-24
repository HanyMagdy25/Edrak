import React from "react";
import { Route } from "react-router-dom";
import { Switch , BrowserRouter as Router } from "react-router-dom";
import "./Dashboard.css";
import NavbarDashboard from "./NavbarDashboard"
import AddArticle from "./pages/AddArticle";
import AddWriter from "./pages/AddWriter";
// import logo from "../assets/logo11.png";
// import { NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <Router>
          <div className="dashboard-right">
          <NavbarDashboard/>
        </div>
        <div className="dashboard-left">
          <Switch>
            <Route path='/dashboard/addwriter' component={AddWriter}/>
            <Route path='/dashboard/addarticle' component={AddArticle}/>
          </Switch>
        </div>
        </Router>
        
      </div>
    </div>
  );
};

export default Dashboard;
