import React from 'react';

import photo from '../assets/images/pasfoto.png';
import Hero from "../components/Hero";
import Education from "../components/Education";
import Experience from "../components/Experience";
// import Content from '../components/Content';
import { Container, Row, Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';

function AboutPage(props) {
    return (
        <div>
            <Hero title={props.title} subtitle={props.subtitle} />

            <Container>
                <Row className="justify-content-center mb-5">
                    <Col xs="auto">
                        <Image src={photo} fluid style={{ width: 200 }} />
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} md={5}>
                        {/* <Content> */}
                        <p>Hello, my name is Ariq Daffa Athallah Putra. I'm a full stack engineer with experience in web development such as HTML,
                        CSS, PHP, Laravel, JS, jQuery, and MySQL. In mobile application development, I have also contributed on
                            several Java/Android and Dart/Flutter projects.</p>

                        <p>This year (2020) I got my S.Kom degree from <a target="_blank" rel="noopener noreferrer" href="https://ithb.ac.id/">Institut Teknologi Harapan Bangsa</a> with a GPA of 3,71</p>

                        <p>Besides full stack development, I also have experience on working as Project Manager and System
                            Analyst.</p>

                        <p>I'm constantly learning new things. currently those things include gaining more experience with
                            React, Vue JS, Node JS, MongoDB, and Kotlin.</p>

                        <p>You can find me on&nbsp;
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/ariqd">Github</a>,&nbsp;
                                <a target="_blank" rel="noopener noreferrer"
                                href="https://www.linkedin.com/in/ariqd/">LinkedIn</a>,&nbsp;
                                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/ariqd">Facebook</a>, or&nbsp;
                                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/daffariq/">Instagram</a>
                        </p>

                        <hr />

                        {/* <h4>Additional</h4> */}

                        <div className="mt-3">
                            Highly proficient in the following technologies:

                            <ul>
                                <li>Operating System: Windows and Linux</li>
                                <li>Database: MySQL and Oracle</li>
                                <li>Programming Languages: PHP (Laravel), Java, Dart (Flutter)</li>
                                <li>Web Design and Development: HTML, CSS, Javascript, jQuery, and React.js</li>
                                <li>Office Suite: Microsoft Office (Word, Excel, Powerpoint, Visio, and Access)</li>
                            </ul>
                        </div>

                        <div className="mt-3">
                            Have completed the following projects:

                            <ul>
                                <li>
                                    Superbrands Futsal Smart Baby League mobile application for Android and iOS (2019).
                                </li>
                                <li>
                                    Bandung Choral Society company profile website and internal choir event and participant management system (https://bandungchoral.com) (2018).
                                </li>
                                <li>
                                    Verry Sitorus & Partners law firm company profile website (http://www.vsp.co.id) (2017).
                                </li>
                                <li>
                                    Pondokan Tjiburial Hotel company profile website and room booking system (http://pondokantjiburial.com/) (2017).
                                </li>
                            </ul>
                        </div>

                        <ul className="pl-0">
                            <li>
                                Assistant Lecturer in ITHB (2018) for Website Programming subject; taught a class of 20 students.
                            </li>
                            <li>
                                Was awarded top 5 in UI/UX Web Design BSLC Competition (2017), an annual web design competition held by Binus University, Jakarta.
                            </li>
                            <li>
                                Earned a certificate in Android Application Development by participating in Indonesia Android Kejar 3.0 powered by Google Indonesia; completed a series of professional training in Android developer’s skills. (2017).
                            </li>
                            <li>
                                Was awarded 1st winner of Festival Harapan Bangsa (2015), a web design competition held by Institut Teknologi Harapan Bangsa along with a team of 2 other classmates.
                            </li>
                        </ul>
                    </Col>

                    <Col xs={12} md={7}>
                        <Experience />

                        <hr />

                        <Education />
                    </Col>
                </Row>
            </Container>
        </div >
    );
}

export default AboutPage;