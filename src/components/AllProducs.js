import React from "react";
import axios from "axios";
import Header from "./Header";
import '../App.css'
import Loader from "./Loader";
import { Link } from "react-router-dom";
class AllProducts extends React.Component {
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
      let products = this.state.products;
      return (
         <div className="App">
            {
               this.state.status === this.API_STATES.LOADING && <Loader />
            }

            {
               this.state.status === this.API_STATES.ERROR &&
               <div className="error-message">
                  <i className="fa fa-exclamation-circle"></i>
                  <h2>Oops! Something went wrong</h2>
                  <h4>{this.state.errorMessage}</h4>
               </div>
            }

            {
               this.state.status === this.API_STATES.LOADED && products.length === 0 &&
               <div className='error'>
                  <i className="fa fa-exclamation-circle"></i>
                  <h2>Oops! Something went wrong</h2>
                  <h4>No products available at the moment. Please try after some time.</h4>
               </div>
            }
            <ul>
               {
                  this.state.status === this.API_STATES.LOADED && products.length > 0 &&
                  products.map(product => {
                     return (
                        <li key={product.id} onClick={this.handelClick}>
                           <div className="editSymbol">
                              <p>{product.category}</p>
                              <i className="fa-solid fa-pen-to-square"></i>
                           </div>
                           <img src={product.image}></img>
                           <h4>{product.title}</h4>
                           <p>{product.description.slice(0, 85)}...</p>
                           <div className="rating">{product.rating.rate}({product.rating.count})</div>
                           <div className="price">${product.price}</div>
                        </li>
                     )
                  })
               }
            </ul>
         </div>
      )
   }
}

export default AllProducts;