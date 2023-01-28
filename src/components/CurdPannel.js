import { Component } from "react"
import { Link } from "react-router-dom";

class CurdPannel extends Component {
   constructor() {
      super();
      this.state = {
         title: '',
      }
   }
   handleInput = (event) => {
      const {
         name,
         value
      } = event.target

      this.setState(
         {
            [name]: value
         }
      )
   }
   render() {
      let item = this.props.products.filter((product) => {
         if (product.id == this.props.match.params.id) {
            return true
         }
      })[0]
      return (
         <div className="App" >
            <div className="container">
               <div className="card">
                  <div className="card-body">
                     <h3 className="text-center m-0">PRODUCT DETAILS</h3>
                     <form className="row mx-5 p-3">
                        <div className="row form-group">
                           <label className='form-label' htmlFor='title'>
                              Title</label>
                           <input
                              type="text"
                              className='form-control input-lg'
                              id='title'
                              name="title"
                              value={item.title || ''}
                              onChange={this.props.handleInput}
                           />
                        </div>
                        <div className="row form-group">
                           <label className='form-label' htmlFor='description'> Description</label>
                           <input
                              type="text"
                              className='form-control input-lg'
                              id='description'
                              name="description"
                              value={item.description || ''}
                              placeholder='Description'
                           />
                        </div>
                        <div className="row form-group">
                           <label className='form-label' htmlFor='category'> Category</label>
                           <input
                              type="text"
                              className='form-control input-lg'
                              id='category'
                              name="category"
                              value={item.category || ''}
                           />
                        </div>
                        <div col>
                           <Link to="/">
                              <button type="button" className="btn btn-danger btn-lg" onClick={() => { this.props.delete(item.id) }}>Remove Item</button>
                           </Link>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default CurdPannel;