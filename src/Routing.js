import Home from "./Home";
import Contact from"./Contact";
import About from "./About";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Header from "./Header";
import Service from "./Service";
import Footer from "./Footer";
import Products from "./Products";
import Login from "./Login";
import Electronics from "./Electronics";
import Jewelery from "./Jewelery";
import Mensclothing from "./Mensclothinig";
import Womenclothing from "./Womenclothing";
function Routing()
{
    return(
        <div>
            <BrowserRouter>
            <Header></Header>
            
            <Routes>
          
                <Route path="home" element={<Home></Home>}></Route>
                <Route path="/service" element={<Service></Service>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/contact" element={<Contact></Contact>}></Route>
                <Route path="/products" element={<Products></Products>}></Route>
                <Route path="/electronics" element={<Electronics></Electronics>}></Route>
                <Route path="/jewelery" element={<Jewelery></Jewelery>}></Route>
                <Route path="/mensclothing" element={<Mensclothing></Mensclothing>}></Route>
                <Route path="/womenclothing" element={<Womenclothing></Womenclothing>}></Route>







                <Route path="/login" element={<Login></Login>}></Route>
                
               
            </Routes>
            <Footer></Footer>
              </BrowserRouter>
        </div>
    )
}
export default Routing