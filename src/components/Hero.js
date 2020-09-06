import React from 'react';

import workspace from '../assets/images/workspace.png';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

function Hero(props) {

    return (
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={false}>
                <Row className="justify-content-center align-items-center">
                    <Col md={8} sm={12} className="py-5">
                        {props.title && <h1 className="display-2 font-weight-bolder">{props.title}</h1>}
                        {props.subtitle && <h3 className="display-5 font-weight-light">{props.subtitle}</h3>}
                        {props.text && <h3 className="lead font-weight-light">{props.text}</h3>}
                    </Col>
                    <Col md={4} sm={4} className="py-5 d-none d-lg-block">
                        <img className="img-fluid " src={workspace} alt='workspace' />
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero;