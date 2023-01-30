import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ShowProduct extends Component {
   render() {
      return (
         <div className='singleProduct'>
            <div>
               <img src={this.props.image}></img>
            </div>
            <div className='content'>
               <h3 className="title">{this.props.title}</h3>
               <p>{this.props.description}</p>
               <div className="rating">{this.props.rating.rate}({this.props.rating.count})</div>
               <div className="price">${this.props.price}</div>
               <button className="btn btn-primary"> <i className="fa fa-shopping-cart" /> Add to cart</button>
            </div>
         </div>
      )
   }
}

export default ShowProduct