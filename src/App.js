import React, { Component } from "react";
// import { connect } from "react-redux";
import "./App.css";
import Navbar from "./Navbar/Navbar";

import { BrowserRouter as Router , Route , Switch  } from 'react-router-dom';
import Service from "./Pages/Service";
import Search from "./Search/Search";
import Product from "./Pages/Product";
import MoviesState from "./Pages/MoviesState";
import MovieDetails from "./Pages/MovieDetails";
// import watchList from "./Pages/watchList";
import WatchList from "./Pages/watchList";

class App extends Component  {
  render(){
    return (
      <Router>
        <div className="App">
        <Navbar/>
        {/* <button onClick={this.props.increase}>+</button>
        <div>{this.props.count}</div>
        <button onClick={this.props.decrease}>-</button> */}
        <Switch>
          <Route path="/" exact component={Search} /> 
          <Route path="/service" component={Service} />
          <Route path="/product" component={Product} />
          <Route path="/sign-up" component={MoviesState} />
          <Route path="/watchlist" component={WatchList} />
          <Route path="/movie/:imdbID" component={MovieDetails}/>
        </Switch>
      </div>
      </Router>
      
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     count: state.count
//   }
// }


// function mapDispatchToProps(dispatch) {
//   return {
//     increase: () =>
//       dispatch({
//         type: "INCREASE",
//       }),
//     decrease: () =>
//       dispatch({
//         type: "DECREASE",
//       }),
//   };
// }

export default App;

