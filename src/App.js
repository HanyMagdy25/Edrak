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
          <Route path='/' exact component={Header}/>
          <Route path='/home' component={Header}/>
          <Route path="/articles" component={Articles} />
          <Route path="/article-inside/:_id" component={ArticleInside} />
          <Route path="/tv" component={TvEdrak} />
          <Route path="/tv-inside/:_id" component={TvInside} />
        </Switch>
        
        <Footer/>
      
      </Router>
      
    );
  }
}


export default App;

