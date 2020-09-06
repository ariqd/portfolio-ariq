import React from 'react';
import Hero from "../components/Hero";
import gmail from '../assets/images/logo-gmail.png';
import linkedin from '../assets/images/linkedin.png';
import facebook from '../assets/images/fb.png';
import instagram from '../assets/images/ig.png';
import github from '../assets/images/github.png';
import styled from 'styled-components'

import { Container, Row, Col, Card, Image } from 'react-bootstrap';

const Connect = styled(Card)`
    cursor: pointer;
    &:hover {
        border-color: #2196F3;
        ${Card.Body}
            color: #2196F3;
        }
    } 
`;

const Link = styled.a`
&:hover {
    text-decoration: none;
    } 
`;

class ContactPage extends React.Component {
    render() {
        return (
            <div>
                <Hero title={this.props.title} />

                <Container>
                    <Row>
                        <Col xs={12} md={4}>
                            <Connect>
                                <Link href="https://github.com/ariqd" target="_blank">
                                    <Card.Body>
                                        <Row className="align-items-center">
                                            <Col xs={3}>
                                                <Image src={github} fluid />
                                            </Col>
                                            <Col xs={9}>
                                                <Card.Title>Visit my Github Repo</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">
                                                    ariqd
                                                </Card.Subtitle>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Link>
                            </Connect>
                        </Col>
                        <Col xs={12} md={4}>
                            <Connect>
                                <Link href="mailto:ariqdaffaathallah@gmail.com" target="_blank">
                                    <Card.Body>
                                        <Row className="align-items-center">
                                            <Col xs={3}>
                                                <Image src={gmail} fluid />
                                            </Col>
                                            <Col xs={9}>
                                                <Card.Title>Send me an E-Mail</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">
                                                    ariqdaffaathallah@gmail.com
                                                </Card.Subtitle>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Link>
                            </Connect>
                        </Col>
                        <Col xs={12} md={4}>
                            <Connect>
                                <Link href="https://www.linkedin.com/in/ariqd/" target="_blank">
                                    <Card.Body>
                                        <Row className="align-items-center">
                                            <Col xs={3}>
                                                <Image src={linkedin} fluid />
                                            </Col>
                                            <Col xs={9}>
                                                <Card.Title>Add me on LinkedIn</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">
                                                    Ariq Daffa Athallah Putra
                                                </Card.Subtitle>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Link>
                            </Connect>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col xs={12} md={4}>
                            <Connect>
                                <Link href="https://www.facebook.com/ariqd/" target="_blank">
                                    <Card.Body>
                                        <Row className="align-items-center">
                                            <Col xs={3}>
                                                <Image src={facebook} fluid />
                                            </Col>
                                            <Col xs={9}>
                                                <Card.Title>Add me on Facebook</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">
                                                    Ariq Daffa Athallah Putra
                                                </Card.Subtitle>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Link>
                            </Connect>
                        </Col>
                        <Col xs={12} md={4}>
                            <Connect>
                                <Link href="https://www.instagram.com/daffariq/" target="_blank">
                                    <Card.Body>
                                        <Row className="align-items-center">
                                            <Col xs={3}>
                                                <Image src={instagram} fluid />
                                            </Col>
                                            <Col xs={9}>
                                                <Card.Title>Follow me on Instagram</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">
                                                    @daffariq
                                                </Card.Subtitle>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Link>
                            </Connect>
                        </Col>
                    </Row>
                </Container>

                {/* <Content>
                    <Form.Group>
                        <Form.Label htmlFor="full-name">Full Name</Form.Label>
                        <Form.Control id="full-name"
                                      name="name"
                                      type="text"
                                      value={this.state.name}
                                      onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor="email">Email</Form.Label>
                        <Form.Control id="email"
                                      name="email"
                                      type="email"
                                      value={this.state.email}
                                      onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor="message">Message</Form.Label>
                        <Form.Control id="message"
                                      name="message"
                                      as="textarea"
                                      rows="3"
                                      value={this.state.message}
                                      onChange={this.handleChange}/>
                    </Form.Group>

                    <Button className="d-inline-block float-right" variant="dark" type="submit"
                            disabled={this.state.disabled}>
                        Send
                    </Button>


                    {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                    {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}
                </Content> */}
            </div >
        );
    }
}

export default ContactPage;