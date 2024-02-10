import { Link } from "react-router-dom"
import "./Header.css"
import image4 from"./Logo1.png"

function Header()
{
    return(
        
            
        <div className="header1">
            
                <h1>RS Fashion</h1>
                <img src={image4} width="5%" height="5%"></img>
                
                
           <div className="header2">
           </div>
           
            <ul>
                
                <li> <Link to="home">Home</Link></li>
                <li><Link to="about">About</Link></li>
                <li> <Link to="service">Service</Link></li>
                <li><Link to="contact">Contact</Link></li>
                <li><Link to="products">All Products</Link></li>
                <li><Link to="electronics">Electronics</Link></li>
                <li><Link to="jewlery">Jewelery</Link></li>
                <li><Link to="mensclothing">Mensclothing</Link></li>
                <li><Link to="womenclothing">Womenclothing</Link></li>
              <Link to="/login"> <button>Login</button></Link> 
              
                
            
            </ul>
           
        </div>
    )
}
export default Header