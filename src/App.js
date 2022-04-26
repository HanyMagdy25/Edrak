import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router , Route , Switch  } from 'react-router-dom';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Articles from "./Articles/Articles";
import ArticleInside from "./Articles/ArticleInside";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import TvEdrak from "./Pages/TV-edrak/TvEdrak";
import TvInside from "./Pages/TV-edrak/TvInside";
import Writers from "./Pages/Writers/Writers";
import Papers from "./Pages/Papers/Papers";
import PaperInside from "./Pages/Papers/PaperInside";
import WriterInside from "./Pages/Writers/WriterInside";
import Dashboard from "./Dashboard/Dashboard";
import Login from "./Dashboard/Login";

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

const token = localStorage.getItem("token");
    console.log("from app :",token)

    const pathname = window.location.pathname;


class App extends Component  {
  render(){
    return (
      <Router>
        <ScrollToTop/>
        {pathname !== "/dashboard" && pathname!=="/dashboard/addarticle" && pathname !== "/dashboard/addwriter" && <Navbar/>}
        {/* <Navbar/> */}
        <Switch>
          <Route path='/' exact component={Header}/>
          <Route path='/home' component={Header}/>
          <Route path="/articles" component={Articles} />
          <Route path="/article-inside/:_id" component={ArticleInside} />
          <Route path="/tv" component={TvEdrak} />
          <Route path="/tv-inside/:_id" component={TvInside} />
          <Route path="/writers" component={Writers} />
          <Route path="/writers-inside/:_id" component={WriterInside} />
          {/* <Route path="/papers" component={Papers} /> */}
          {/* <Route path="/paper-inside/:_id" component={PaperInside} /> */}
          <Route path="/dashboard" component={Dashboard} />
           
          <Route path="/login" component={Login} />
        </Switch>


        {pathname !== "/dashboard" && pathname!=="/dashboard/addarticle" && pathname !== "/dashboard/addwriter" && <Footer/>}
      
      </Router>
      
    );
  }
}


export default App;

