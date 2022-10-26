import { Container, Row, Col } from "react-bootstrap";
import BreadcrumbPage from "./breadcrumbPage";

const DetailedProduct = () => {
    return (
        <Container>
            <Row>
                <BreadcrumbPage category="kategoria" name="nazwa" />
            </Row>
            <Row>
                <Col xl="6">

                </Col>
                <Col xl="6">

                </Col>
            </Row>
        </Container>
    );
}

export default DetailedProduct;