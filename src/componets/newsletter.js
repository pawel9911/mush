import { Button, Container, Form, Row } from "react-bootstrap";


const Newsletter = () => {
    return (
        <Container>
            <Row>
                <div className="col-12">
                    <h3 className="text-center">Odbierz 20zł na pierwsze zakupy</h3>
                    <div className="text-center">Zapisz się do newslettera Mush i otrzymaj zniżkę na pierwsze zamówienie za min. 100 zł. <br></br> Nie przegap informacji o rabatach, wyprzedażach i najnowszych trendach.</div>
                </div>
            </Row>
            <Row>
                <Form className="d-flex justify-content-center">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Wprowadź adres e-mail" />
                    </Form.Group>
                    <Button variant="outline-secondary text-left" type="submit">Zapisz się</Button>
                </Form>
            </Row>
            <Row>
                <div className="d-flex justify-content-center">
                    <p>Administratorem podanych danych osobowych jest <strong>Mush</strong> z siedzibą w <strong>Miasto, ul. Hallera 18, 31-564 Miasto</strong>.
                        Możesz w każdym czasie wycofać tę zgodę. Pamiętaj, że przetwarzanie przez nas Twoich danych do czasu cofnięcia zgody jest zgodne z prawem. Szczegóły w &nbsp;
                        <a href="/">polityce prywatności</a>
                    </p>
                </div>
            </Row>
        </Container>
    );
}

export default Newsletter;