import { Link } from "react-router-dom";
function Header() {
   return (
      <nav className="navbar navbar-dark bg-primary p-3">
         <Link to="/" className="navbar-brand">
            <i className="fa fa-shopping-cart"></i> My Cart</Link>
         <Link to="/" className="navbar-brand" >Home</Link>
         <Link to="/CurdPannel" className="navbar-brand" >Add product</Link>
      </nav>
   )
}
export default Header;