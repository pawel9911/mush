import { Carousel } from "react-bootstrap";
import LogoWhite from '../img/Logo-white.png';
import Button from 'react-bootstrap/Button';


const MainCarousel = () => {
    return (
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={LogoWhite}
              alt="First slide"
            />
            <Carousel.Caption className="h-100 d-flex flex-column justify-content-center align-items-center">
                <h2>Title</h2>
                <p>sub text</p>
                <Button variant="outline-secondary">Secondary</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={LogoWhite}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={LogoWhite}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    );
}

export default MainCarousel;