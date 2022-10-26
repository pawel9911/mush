import { Button, Container, Row } from "react-bootstrap";
import Product from "./product";
import LogoWhite from '../img/Logo-white.png';


const ProductList = ({categoryTitle}) => {
    return (
        <Container>
            <h2 className="text-uppercase text-center my-5">{categoryTitle}</h2>
            <Row>
                <Product title="Czapka" price="89.99" imgSrc={LogoWhite}/>
                <Product title="Czapka" price="89.99" imgSrc={LogoWhite}/>
                <Product title="Czapka" price="89.99" imgSrc={LogoWhite}/>
                <Product title="Czapka" price="89.99" imgSrc={LogoWhite}/>
            </Row>
            <div className="d-flex justify-content-end">
                <Button variant="outline-secondary text-left">Zobacz wszystkie</Button>
            </div>
        </Container>
    );
}

export default ProductList;