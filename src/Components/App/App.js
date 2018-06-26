import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Header from "../Header/Header";
import Homepage from "../Homepage/Homepage";
import Footer from "../Footer/Footer";
import ProjectPage from "../ProjectPage/ProjectPage";
import ApolloClient, { createNetworkInterface, addTypename } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import './App.css';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>  
      <div className="App">
        <Header />
        <Route exact path="/" component={Homepage} />
        <Route path="/projectpage" component={ProjectPage} />
        <Footer />
      </div>
      </ApolloProvider>
    );
  }
}

export default App;
