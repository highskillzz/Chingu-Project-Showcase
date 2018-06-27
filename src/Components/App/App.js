import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Header from "../Header/Header";
import Homepage from "../Homepage/Homepage";
import Footer from "../Footer/Footer";
import ProjectPage from "../ProjectPage/ProjectPage";
import './App.css';

class App extends Component {
  render() {
    return (      
      <div className="App">
        <Header />
        <Route exact path="/" component={Homepage} />
        <Route path="/projectpage" component={ProjectPage} />
        <Footer />
      </div>
    );
  }
}

export default App;
