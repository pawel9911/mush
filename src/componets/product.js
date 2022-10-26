import { Card } from "react-bootstrap";

const Product = ({title, price, imgSrc,}) => {
    return (
        <div className="col-3 mb-4">
            <Card>
                <Card.Img variant="top" src={imgSrc} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{price} zł</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Product