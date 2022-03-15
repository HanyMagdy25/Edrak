import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router , Route , Switch  } from 'react-router-dom';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Articles from "./Articles/Articles";
import ArticleInside from "./Articles/ArticleInside";


class App extends Component  {
  render(){
    return (
      <Router>
        
        <Navbar/>
        <Switch>
          {/* <Header/> */}
          <Route path='/' exact component={Header}/>
          <Route path='/test-all' exact component={Header}/>
          <Route path="/articles" component={Articles} />
          <Route path="/article-inside" component={ArticleInside} />
        </Switch>
        
        <Footer/>
      
      </Router>
      
    );
  }
}


export default App;

