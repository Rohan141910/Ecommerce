import { Link } from "react-router-dom"
import "./login.css"

function Login()
{
    return(
        <div className="login1">
            
            <div className="login2">
                <form>
                    
                    Username : <input type="text" placeholder="Enter Name"></input><br></br>
                    
                    Password : <input type="number" placeholder="Password"></input><br></br>


                    <button><Link to="home">Submit</Link></button>
                </form>
            </div>
        </div>
    )
}
export default Login