import React from "react";
import axios from "axios";
import './App.css'
import Header from "./components/Header";
import Loader from "./components/Loader";
import Footer from "./components/Footer";
import CurdPannel from "./components/CurdPannel";
import ProductCard from "./components/ProductCard";
import AllProducts from "./components/AllProducs";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class App extends React.Component {
  constructor(props) {
    super(props)
    this.API_STATES = {
      LOADING: "loading",
      LOADED: "loaded",
      ERROR: "error"
    }

    this.state = {
      status: this.API_STATES.LOADING,
      products: [],
      errorMessage: "",
    };
    this.URL = 'https://fakestoreapi.com/products'
  }

  delete = (event) => {
    let products = this.state.products.filter(product => {
      if (product.id === event) {
        return false
      } else {
        return true
      }
    })
    this.setState({
      products
    })
  }

  FetchData = (url) => {
    this.setState({
      status: this.API_STATES.LOADING,
    }, () => {
      axios.get(url)
        .then(response => {
          this.setState({
            status: this.API_STATES.LOADED,
            products: response.data
          })
        })
        .catch(error => {
          this.setState({
            status: this.API_STATES.ERROR,
            errorMessage: 'An API error occurred, please try after some time.',
          })
        })
    })
  }
  handelClick = () => {
    console.log('handelClick')
  }

  componentDidMount() {
    this.FetchData(this.URL)
  }

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <AllProducts
              products={this.state.products}
              errorMessage={this.state.errorMessage}
              status={this.state.status}
            />
          </Route>
          <Route path="/product/:id" exact render={(props) => {
            return (
              <CurdPannel
                {...props}
                products={this.state.products}
                delete={this.delete} />
            )
          }}>
          </Route>
          <Route path="/CurdPannel" exact render={(props) => {
            return (
              <CurdPannel
                products={this.state.products}
              />
            )
          }}>
          </Route>
        </Switch>
        <Footer />
      </Router >
    )
  }
}

export default App;