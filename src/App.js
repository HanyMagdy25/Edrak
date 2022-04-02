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

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}


class App extends Component  {
  render(){
    return (
      <Router>
        <ScrollToTop/>
        <Navbar/>
        <Switch>
          {/* <Header/> */}
          <Route path='/home' exact component={Header}/>
          <Route path="/articles" component={Articles} />
          <Route path="/article-inside/:_id" component={ArticleInside} />
        </Switch>
        
        <Footer/>
      
      </Router>
      
    );
  }
}


export default App;

