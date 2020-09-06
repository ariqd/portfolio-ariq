import React from 'react'
import { Row, Col } from 'react-bootstrap'

function Education() {
    return (
        <div>
            <h4>Education</h4>

            <div className="pt-3">
                <Row>
                    <Col>
                        <strong>Institut Teknologi Harapan Bangsa</strong>
                    </Col>
                    <Col>
                        <span className="float-right">June 2020</span>
                    </Col>
                </Row>

                <Row>
                    <Col>Sarjana Sistem Informasi, Concentration: IT Infrastructure Management</Col>
                </Row>

                <Row>
                    <Col>GPA: 3,71</Col>
                </Row>
            </div>

            <div className="pt-3">
                <Row>
                    <Col>
                        <strong>Certiplus Program</strong>
                    </Col>
                    <Col>
                        <span className="float-right">November 2019</span>
                    </Col>
                </Row>

                <Row>
                    <Col>at ITHB Career Resource Center</Col>
                </Row>

                <Row>
                    <Col>
                        Completed a series of professional training in computer, communication,
                        simply accounting, leadership, entrepreneurship and career planning skills
                    </Col>
                </Row>
            </div>

            <div className="pt-3">
                <Row>
                    <Col>
                        <strong>ORACLE University</strong>
                    </Col>
                    <Col>
                        <span className="float-right">April 2019</span>
                    </Col>
                </Row>

                <Row>
                    <Col>at ITHB Career Resource Center</Col>
                </Row>

                <Row>
                    <Col>
                        Completed the Oracle 11g Administration to Workshop 1
                    </Col>
                </Row>
            </div>

            <div className="pt-3">
                <Row>
                    <Col>
                        <strong>SAP University Alliance Program</strong>
                    </Col>
                </Row>

                <Row>
                    <Col>at ITHB Career Resource Center</Col>
                </Row>

                <Row>
                    <Col>
                        Completed the SAP ERP Configuration
                    </Col>
                    <Col>
                        <span className="float-right">April 2018</span>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        Completed the SAP Introduction to SAP ERP
                    </Col>
                    <Col>
                        <span className="float-right">December 2017</span>
                    </Col>
                </Row>
            </div>

            <div className="pt-3">
                <Row>
                    <Col>
                        <strong>
                            SMKN 4 BANDUNG, Bandung, Indonesia
                        </strong>
                    </Col>
                    <Col>
                        <span className="float-right">May 2016</span>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        Rekayasa Perangkat Lunak
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Education
