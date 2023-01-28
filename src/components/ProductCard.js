import { Link } from "react-router-dom";
function ProductCard({ product }) {
   return (
      <>
         <div className="editSymbol">
            <p>{product.category}</p>
            <Link to={`/product/${product.id}`}>
               <i className="fa-solid fa-pen-to-square"></i>
            </Link>
         </div>
         <img src={product.image}></img>
         <h4>{product.title}</h4>
         <p>{product.description.slice(0, 85)}...</p>
         <div className="rating">{product.rating.rate}({product.rating.count})</div>
         <div className="price">${product.price}</div>
      </>
   )
}
export default ProductCard;