import { Component } from "react"
import { Link } from "react-router-dom";
import validator from "validator";

class AddProduct extends Component {
   constructor(props) {
      super(props);
      this.state = {
         isChanged: false,
         isDeleted: false,
         errors: {},
         isFormFilled: false,
         isDeleted: false,
         title: '',
         description: '',
         price: '',
         category: '',
         image: '',
      }
   }
   saveChange = (event) => {
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
   isDeletedMessage = (state) => {
      if (state === 'No') {
         this.setState({
            isDeleted: false
         });
      } else {
         this.setState({
            isDeleted: true
         });
      }
   }

   change = (event) => {
      event.preventDefault()
      const {
         description,
         title,
         price,
         category,
         image,
      } = this.state
      let errors = {}
      if (title === "" || title.trim() === "") {
         errors.title = "Please enter the product title"
      }
      if (description === "" || description.length <= 20 || title.trim() === "") {
         errors.description = "Description must be at least 20 characters"
      }
      if (price === "" || isNaN(price) || price === 0 || title.trim() === "") {
         errors.price = "Please enter proper price"
      }
      if (category === "" || title.trim() === "") {
         errors.category = "Please enter proper category"
      }
      if (image === "" || image.trim() === "" || !validator.isURL(image)) {
         errors.image = "Please enter proper image URL"
      }
      if (Object.keys(errors).length === 0) {
         this.setState(
            {
               isFormFilled: true
            }, () => {
               this.props.addNewProduct(this.state)
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
      const {
         description,
         title,
         price,
         category,
         image
      } = this.state
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
                                       onChange={this.saveChange}
                                       className='textarea'
                                       id='title'
                                       name="title"
                                       defaultValue={title}
                                    />
                                    <p className='text-danger mb-0'>{this.state.errors.title}</p>
                                 </div>
                                 <div className="row form-group">
                                    <label className='form-label' htmlFor='description'> Description</label>
                                    <textarea
                                       className='textarea'
                                       onChange={this.saveChange}
                                       id='description'
                                       name="description"
                                       defaultValue={description}
                                       rows='4'
                                    />
                                    <p className='text-danger mb-0'>{this.state.errors.description}</p>
                                 </div>
                                 <div className="row form-group">
                                    <label className='form-label' htmlFor='category'> Category</label>
                                    <textarea
                                       className='textarea'
                                       onChange={this.saveChange}
                                       id='category'
                                       name="category"
                                       defaultValue={category}
                                    />
                                    <p className='text-danger mb-0'>{this.state.errors.category}</p>

                                 </div>
                                 <div className="row form-group">
                                    <label className='form-label' htmlFor='price'> Price</label>
                                    <textarea
                                       className='textarea'
                                       onChange={this.saveChange}
                                       id='price'
                                       name="price"
                                       defaultValue={price}
                                    />
                                    <p className='text-danger mb-0'>{this.state.errors.price}</p>
                                 </div>
                                 <div className="row form-group">
                                    <label className='form-label' htmlFor='image'> Image</label>
                                    <textarea
                                       className='textarea'
                                       onChange={this.saveChange}
                                       id='image'
                                       name="image"
                                       defaultValue={image}
                                    />
                                    <p className='text-danger mb-0'>{this.state.errors.image}</p>
                                 </div>
                                 <div className="form-right-btns">
                                    <div className="form-btns">
                                       {
                                          !this.state.isDeleted
                                             ?
                                             <div>
                                                <button type="button" className="btn btn-danger" onClick={() => {
                                                   this.isDeletedMessage('Yes')
                                                }}> Cancel </button>
                                             </div>
                                             :
                                             <div className="deleteConfirmation">
                                                <Link to="/">
                                                   <button className="btn btn-primary">Yes</button>
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


export default AddProduct;