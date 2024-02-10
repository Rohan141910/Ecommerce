import { useEffect, useState } from "react"
import Table from 'react-bootstrap/Table';

import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBBtn
  } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";


function Products()
{
    const[apidata,setapidata]=useState([])
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products").then((result)=>{
             result.json().then((data)=>{
                setapidata(data)

            })
        })
    },[])
    return(
        <div>

<MDBRow className='row-cols-1 row-cols-md-3 g-4'>
{
            apidata.map((item)=>
      <MDBCol>
        
            <MDBCard className='h-100'>
            <center><MDBCardImage  src={item.image} width="100px" height="150px" /></center>
            <MDBCardBody>
              <MDBCardTitle>{item.title}</MDBCardTitle>
              <MDBCardTitle>{item.price*80} Rs</MDBCardTitle>
              <MDBCardText>{item.description.substring(0,100)} </MDBCardText>
              <MDBBtn>View Details</MDBBtn>
            </MDBCardBody>
          </MDBCard> 
           
      </MDBCol>
      
      )
        }
     
    </MDBRow>
{/* //                 <div><Table striped bordered hover variant="Light">
//         <tbody>
//             <tr>
//                 <td>Id</td>
//                 <td>Title</td>
//                 <td>Price</td>
//                 <td>description</td>
//                 <td>Category</td>
//                 <td>Image</td>
//             </tr>
//             { */}
{/* //                 apidata.map((item)=>
//                 <tr>
//                    <td>{item.id}</td>
//                     <td>{item.title}</td>
//                     <td>{item.price*80}Rs</td>
//                     <td>{item.description}</td>
//                     <td>{item.category}</td>
//                     <td><img src={item.image} width="100px" height="100px"></img></td>
//                     </tr>
//                 )
    
//             }
//         </tbody>
//         </Table>  */}
</div>
     )
 }
 export default Products