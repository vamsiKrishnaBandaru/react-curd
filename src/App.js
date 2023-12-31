import React from "react";
import axios from "axios";
import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import CurdPannel from "./components/CurdPannel";
import AllProducts from "./components/AllProducts";
import AddProduct from "./components/AddProduct";
import ShowProduct from "./components/ShowProduct";
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
      ModifiedProducts: null,
      errorMessage: "",
    }
    this.URL = 'https://fakestoreapi.com/products'
  }

  addNewProduct = (data) => {
    const array = this.state.products
    let lastId = array[array.length - 1].id
    const newProduct = {
      id: lastId + 1,
      title: data.title,
      description: data.description,
      price: data.price,
      category: data.category,
      rating: {
        count: 0,
        rate: 0
      },
      image: data.image
    }
    array.push(newProduct)
    this.setState({
      products: array
    })
  }

  handelInput = (event, id) => {
    let array = this.state.products
    const EditedProduct = array.find(product => {
      return product.id === id
    })
    EditedProduct[event.target.id] = event.target.value
    this.setState({
      products: array
    })
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

          <Route exact path="/product/:id" render={(props) => {
            const id = props.match.params.id
            const selectedProduct = this.state.products.find((product) => {
              return product.id.toString() === id
            })
            return <CurdPannel {...props}
              {...selectedProduct}
              handelInput={this.handelInput}
              delete={this.delete}
            />
          }}>
          </Route>
          <Route path="/CurdPannel" exact render={() => {
            return <AddProduct
              handelInput={this.handelInput}
              products={this.products}
              addNewProduct={this.addNewProduct}
            />
          }}>
          </Route>
          <Route path="/:id" render={(props) => {
            const id = props.match.params.id
            const selectedProduct = this.state.products.find((product) => {
              return product.id.toString() === id
            })
            return <ShowProduct {...props}
              {...selectedProduct}
            />
          }}>
          </Route>
        </Switch>
        <Footer />
      </Router >
    )
  }
}

export default App;