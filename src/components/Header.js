import { Link } from "react-router-dom";
function Header() {
   return (
      <nav className="navbar navbar-dark bg-primary p-3">
         <div className="header">
            <Link to="/" className="navbar-brand ">
               <i className="fa fa-shopping-cart"></i> My Cart</Link>
            <div className="headerLeft">
               <Link to="/CurdPannel" className="navbar-brand">Add Product</Link>
               <Link to="/" className="navbar-brand"> Home</Link>
            </div>
         </div>
      </nav>
   )
}
export default Header;