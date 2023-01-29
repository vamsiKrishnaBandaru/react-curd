import { Component } from "react"
import { Link } from "react-router-dom";

class CurdPannel extends Component {
   constructor(props) {
      super(props);
      this.state = {
         isChanged: false,
         isDeleted: false,
      }
   }

   render() {
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
                           <textarea
                              onChange={(e) => {
                                 this.props.handelInput(e, this.props.id)
                              }}
                              className='textarea'
                              id='title'
                              name="title"
                              defaultValue={this.props.title}
                           />
                        </div>
                        <div className="row form-group">
                           <label className='form-label' htmlFor='description'> Description</label>
                           <textarea
                              className='textarea'
                              onChange={(e) => {
                                 this.props.handelInput(e, this.props.id)
                              }}
                              id='description'
                              name="description"
                              defaultValue={this.props.description}
                              rows='4'
                           />
                        </div>
                        <div className="row form-group">
                           <label className='form-label' htmlFor='category'> Category</label>
                           <textarea
                              className='textarea'
                              onChange={(e) => {
                                 this.props.handelInput(e, this.props.id)
                              }}
                              id='category'
                              name="category"
                              defaultValue={this.props.category}
                           />
                        </div>
                        <div className="row form-group">
                           <label className='form-label' htmlFor='price'> Price</label>
                           <textarea
                              className='textarea'
                              onChange={(e) => {
                                 this.props.handelInput(e, this.props.id)
                              }}
                              id='price'
                              name="price"
                              defaultValue={this.props.price}
                           />
                        </div>
                        <div className="form-btns">
                           <div>
                              <Link to="/">
                                 <button type="button" className="btn btn-danger" onClick={() => {
                                    this.props.delete(this.props.id)
                                 }}>
                                    <i className="fa-solid fa-trash-can"></i> Remove Item</button>
                              </Link></div>

                           <div>
                              <div className="form-right-btns">
                                 <Link to="/">
                                    <button id="cancel" name="cancel" className="btn btn-default" value="1">Cancel</button>
                                    <button type="submit" className="btn btn-primary">Save Changes</button>
                                 </Link>
                              </div>
                           </div>
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