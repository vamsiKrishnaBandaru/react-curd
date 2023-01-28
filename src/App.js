import React from "react";
import axios from "axios";
import Header from "./components/Header";
import './App.css'
import Loader from "./components/Loader";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllProducts from "./components/AllProducs";
class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/">
            <AllProducts />
          </Route>
        </Switch>
        <Footer />
      </Router>

    )
  }
}

export default App;