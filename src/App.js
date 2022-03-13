import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router , Route , Switch  } from 'react-router-dom';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";


class App extends Component  {
  render(){
    return (
      <Router>
        
        <Navbar/>
        <Header/>
        <Footer/>
      
      </Router>
      
    );
  }
}


export default App;

