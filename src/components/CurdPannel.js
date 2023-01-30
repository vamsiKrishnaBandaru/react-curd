import { Component } from "react"
import { Link } from "react-router-dom";

class CurdPannel extends Component {
   constructor(props) {
      super(props);
      this.state = {
         isChanged: false,
         isDeleted: false,
         errors: {},
         isFormFilled: false,
         isDeleted: false,
      }
   }
   isDeletedMessage = (state) => {
      if (state === 'No') {
         this.setState({ isDeleted: false });
      } else {
         this.setState({ isDeleted: true });
      }
   }

   change = (event) => {
      event.preventDefault()
      const {
         description,
         title,
         price,
         category,
      } = this.props
      let errors = {}
      if (title === "" || title.trim() === "") {
         errors.title = "Please enter the product title"
      }
      if (description === "" || description.length <= 20) {
         errors.description = "Description must be at least 20 characters"
      }
      if (price === "" || isNaN(price) || price === 0) {
         errors.price = "Please enter proper price"
      }
      if (category === "") {
         errors.category = "Please enter proper category"
      }
      if (Object.keys(errors).length === 0) {
         this.setState(
            {
               isFormFilled: true
            }
         )
         return
      } else {
         this.setState(
            {
               errors
            }
         );
         return
      }
   }
   render() {
      return (
         <>
            {
               this.state.isFormFilled
                  ?
                  <div className="savedMsg App">
                     <h1>Changes Succesfully saved</h1>
                     <Link to="/">
                        <button type="button" className="btn btn-primary">Go to home</button>
                     </Link>
                  </div>
                  :
                  <div className="App form-box" >
                     <div className="container">
                        <div className="card">
                           <div className="card-body">
                              <h3 className="text-center m-5">PRODUCT DETAILS</h3>
                              <form className="row mx-5 p-5" onSubmit={this.change}>
                                 <div className="row form-group">
                                    <label className='form-label' htmlFor='title'>Title</label>
                                    <textarea
                                       onChange={(e) => {
                                          this.props.handelInput(e, this.props.id)
                                       }}
                                       className='textarea mb-3'
                                       id='title'
                                       name="title"
                                       defaultValue={this.props.title}
                                    />
                                    <p className='text-danger mb-0'>{this.state.errors.title}</p>

                                 </div>
                                 <div className="row form-group">
                                    <label className='form-label' htmlFor='description'> Description</label>
                                    <textarea
                                       className='textarea mb-3'
                                       onChange={(e) => {
                                          this.props.handelInput(e, this.props.id)
                                       }}
                                       id='description'
                                       name="description"
                                       defaultValue={this.props.description}
                                       rows='4'
                                    />
                                    <p className='text-danger mb-0'>{this.state.errors.description}</p>

                                 </div>
                                 <div className="row form-group">
                                    <label className='form-label' htmlFor='category'> Category</label>
                                    <textarea
                                       className='textarea mb-3'
                                       onChange={(e) => {
                                          this.props.handelInput(e, this.props.id)
                                       }}
                                       id='category'
                                       name="category"
                                       defaultValue={this.props.category}
                                    />
                                    <p className='text-danger mb-0'>{this.state.errors.category}</p>

                                 </div>
                                 <div className="row form-group">
                                    <label className='form-label' htmlFor='price'> Price</label>
                                    <textarea
                                       className='textarea mb-3'
                                       onChange={(e) => {
                                          this.props.handelInput(e, this.props.id)
                                       }}
                                       id='price'
                                       name="price"
                                       defaultValue={this.props.price}
                                    />
                                    <p className='text-danger mb-0'>{this.state.errors.price}</p>
                                 </div>
                                 <div className="form-right-btns">
                                    <div className="form-btns">

                                       {
                                          !this.state.isDeleted
                                             ?
                                             <div>
                                                <button type="button" className="btn btn-danger" onClick={() => {
                                                   this.isDeletedMessage('Yes')
                                                }}>
                                                   <i className="fa-solid fa-trash-can"></i> Remove Item</button>
                                             </div>
                                             :
                                             <div className="deleteConfirmation">
                                                <Link to="/">
                                                   <button className="btn btn-primary" onClick={() => {
                                                      this.props.delete(this.props.id)
                                                   }}>Yes</button>
                                                </Link>
                                                <span>
                                                   <button className="btn btn-danger ml-5" onClick={() => {
                                                      this.isDeletedMessage('No')
                                                   }}>No</button>
                                                </span>
                                             </div>
                                       }
                                       <button type="submit" className="btn btn-primary">Save Changes</button>
                                    </div>
                                 </div>
                              </form>
                           </div>
                        </div>
                     </div>
                  </div>
            }
         </>
      )
   }
}


export default CurdPannel;