import React, { Component } from 'react'
import Loader from './Loader';
import ProductCard from './ProductCard';

class AllProducts extends Component {
   render() {
      return (
         <>
            {
               this.props.status === 'loading' && <Loader />
            }
            {
               this.props.status === 'error' &&
               <div className="error-message">
                  <i className="fa fa-exclamation-circle"></i>
                  <h2>Oops! Something went wrong</h2>
                  <h4>{this.props.errorMessage}</h4>
               </div>
            }
            {
               this.props.status === 'loaded' && this.props.products.length === 0 &&
               <div className='error-message'>
                  <i className="fa fa-exclamation-circle"></i>
                  <h2>Oops! Something went wrong</h2>
                  <h4>No products available at the moment. Please try after some time.</h4>
               </div>
            }
            <div className="App">
               <ul>
                  {
                     this.props.status === 'loaded' && this.props.products.length > 0 &&
                     this.props.products.map((product) => {
                        return (
                           <li key={product.id}>
                              <ProductCard
                                 product={product}
                              />
                           </li>
                        )
                     })
                  }
               </ul>
            </div>
         </>
      )
   }
}

export default AllProducts;