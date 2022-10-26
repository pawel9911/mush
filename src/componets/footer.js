import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    return (
        <div>
            <section className='d-flex justify-content-center justify-content-lg-end p-4 border-bottom'>
                <div>
                    <span>Obserwuj nas na: </span>
                    <a href='/' className='mx-1 text-reset'>
                        Facebook
                    </a>
                    <a href='/' className='mx-1 text-reset'>
                        Instagram
                    </a>
                </div>
            </section>
             <section className='mt-4'>
                <Container>
                    <Row>
                        <Col md="2" lg="2" xl="2">
                            <h6 className='text-uppercase fw-bold mb-4'>
                                Informacje
                            </h6>
                            <p>
                                <a href='#!' className='text-reset'>O nas</a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>Bezpieczeństwo</a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>Regulamin</a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>Polityka prywatności</a>
                            </p>
                        </Col>
                        <Col md="2" lg="3" xl="3">
                            <h6 className='text-uppercase fw-bold mb-4'>Obsługa klienta</h6>
                            <p>
                                <a href='#!' className='text-reset'>Kontakt</a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>Czas realizacji zamówienia</a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>Zwroty i reklamacje</a>
                            </p>
                        </Col>
                        <Col md="2" lg="2" xl="2" >
                            <h6 className='text-uppercase fw-bold mb-4'>Dostawa/Płatność</h6>
                            <p>
                                <a href='#!' className='text-reset'>Dostawa</a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>Odbiór w punkcie/salonie</a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>Formy płatności</a>
                            </p>
                        </Col>
                        <Col md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Kontakt</h6>
                            <p>Miasto, NY 10012, US</p>
                            <p>mush@gmail.com</p>
                            <p>+ 48 510 374 040</p>
                            <p>Godziny pracy sklepu:</p>
                            <p>Poniedziałek 10-16</p>
                            <p>Wtorek - Czwartek 7-15</p>
                            <p>Piątek 7-10</p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                Copyright ©
                <a className='text-reset fw-bold mx-2' href='https://mdbootstrap.com/'>Mush.pl</a>
                Wszelkie prawa zastrzeżone.
            </div>
        </div>
    );
}

export default Footer;