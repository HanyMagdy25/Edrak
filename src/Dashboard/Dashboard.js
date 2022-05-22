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
import AllArticles from "./pages/AllArticles";
import AllVideos from "./pages/AllVideos";
import AllWriters from "./pages/AllWriters";
import WriterEdit from "./edit/WriterEdit";
import ArticleEdit from "./edit/ArticleEdit";
import VideoEdit from "./edit/VideoEdit";




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
                <Route path="/dashboard/allarticles" component={AllArticles} />
                <Route path="/dashboard/allvideos" component={AllVideos} />
                <Route path="/dashboard/allwriters" component={AllWriters} />
                <Route path="/dashboard/writeredit/:id" component={WriterEdit} />
                <Route path="/dashboard/articleedit/:id" component={ArticleEdit} />
                <Route path="/dashboard/videoedit/:id" component={VideoEdit} />
              </Switch>
            </div>
          </Router>
        </div>
      </div>
    );
  
};

export default Dashboard;
