import './Footer.css';
import { Col, Container, Row } from 'react-bootstrap';

function Footer() {
    return(
        <>
            <footer>
                <Container>
                    <Row>
                        <Col>
                            <h2>رسالت بوت کمپ</h2>
                            <p>
                                  بوت کمپ با هدف آموزش هایی ایجاد شده که حس شیرین یادگیر
                                لذت بخش برنامه نویسی و طراحی وب برا تجربه کنید
                            </p>
                        </Col>
                        <Col style={{textAlign : 'left'}}>
                            <img src="https://cdn.zarinpal.com/badges/trustLogo/1.svg" />
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default Footer