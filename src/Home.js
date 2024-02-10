import Carousel from 'react-bootstrap/Carousel';
import "./Home.css"
import image from "./Menfashion4.jpg"
import image1 from"./autumn2..png"
import image2 from"./Fashion.3.png"
function Home() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={image} width="100%" height={700}></img>
                <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={image1} width="100%" height={700}></img>
        <Carousel.Caption>
          <h3>Followed by Celebrity</h3>
          <p className='P1'>The customer is very important, the customer will be followed by the customer.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={image2} width="100%" height={700}></img>
                <Carousel.Caption>
          <h3>Trends of the Year</h3>
          <p className='P2'>
          It is a great opportunity to pursue a career in Fashion.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default Home
