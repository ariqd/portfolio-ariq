import React from 'react';
import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';

function Footer() {
    return (
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={2}>
                        &copy; Ariq Daffa
                </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                        Made with love by Ariq Daffa
                </Col>
                </Row>
            </Container>
        </footer >
    );
}

export default Footer;