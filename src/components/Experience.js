import React from 'react'
import { Row, Col } from 'react-bootstrap'

function Experience() {
    return (
        <div>
            <h4>Experience</h4>

            <div className="pt-3">
                <Row>
                    <Col xs={8}>
                        <strong>
                            PT RAHMAT TUHAN LESTARI, Bandung, Indonesia
                        </strong>
                    </Col>
                    <Col xs={4}>
                        <span className="float-right">Jan. 2020 – Aug. 2020</span>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        “UR – Easy & Quick Order”, part of PT Rahmat Tuhan Lestari, is Indonesia’s first restaurant self-ordering application. Download the app on Android or iOS phones then Scan QR Code on Restaurant’s table to order food, drinks, or snacks. Get discounts through our Partner’s vouchers and deals, and see nearby Partners on our map. Manage restaurant’s Menu as a Partner, and acquire insights about sales from Branches as a Restaurant Master.
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <u>
                            Senior Software Engineer
                        </u>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        Engineered code for UR’s website with React JS along with UR Web team of 3 engineers.
                        <ul>
                            <li>
                                Developed UR’s Master website for Restaurants to manage their branches’ name, location, menus, vouchers, subscription plans, and to get insight from daily, monthly, or yearly sales. (partner.ur-hub.com)
                            </li>
                            <li>
                                Developed Partners (Restaurant Branches) website to manage Menus, Tables, and see daily, monthly, and yearly sales.
                                (master.ur-hub.com)
                            </li>
                            <li>
                                Built UR Agent website for Sales and Marketing division to share referral codes, view and withdraw their earnings, and get Marketing Tools to help advertise UR to Restaurants and Users.
                                (agent.ur-hub.com)
                            </li>
                            <li>
                                Built UR Admin website for UR’s internal purposes such as managing Masters and Partners, publishing News, upload Marketing Tools, and view User details.
                            </li>
                        </ul>
                    </Col>
                </Row>
            </div>

            <div className="pt-3">
                <Row>
                    <Col xs={8}>
                        <strong>
                            MAKAYASA ARECA TECHNOLOGY, Bandung, Indonesia
                        </strong>
                    </Col>
                    <Col xs={4}>
                        <span className="float-right">Jan. 2019 – Jan. 2020</span>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        Makayasa Areca Technology (Areca) is an Information Technology consultant specialized in networking and web-based solutions for personal or company use. One of Areca’s client is PT Greentech Cakrawala Motorindo, an official dealer for Kawasaki Motors in Indonesia. Areca helped on establishing the company’s office network, built their e-commerce website, and developed their web-based point of sales system.
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <u>
                            Programmer
                        </u>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        Developed applications for internal and external clients of Makayasa Areca.
                        <ul>
                            <li>
                                Developed web-based applications for PT Greentech Cakrawala Motorindo: Motorbike service online booking, spare part point of sales system, and apparels e-commerce website
                                (https://www.kawasakigreentech.co.id).
                            </li>
                            <li>
                                Developed web-based dashboard, inventory, sales, and employee’s commission calculation system for internal use for PT Indoteknik Pratama Pro (iPro), a company specialized in sales and distribution of wood-based building materials.
                            </li>
                        </ul>
                    </Col>
                </Row>
            </div>

            <div className="pt-3">
                <Row>
                    <Col xs={8}>
                        <strong>
                            PT NEURONWORKS INDONESIA, Bandung, Indonesia
                        </strong>
                    </Col>
                    <Col xs={4}>
                        <span className="float-right">Sept. 2014 - Dec. 2014</span>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        PT Neuronworks Indonesia (Neuron) is a company engaged in the field of Information Technology. Neuron provides solutions that can help companies in facing business challenges that are developing so fast and dynamically. There are more than 100 national and regional scale IT projects that Neuron have been working on. Some of Neuron’s overseas clients are Telkomcel Timor Leste & Telin Malaysia.
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <u>
                            Junior Web Developer
                        </u>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        Designed and developed web solutions based on customer’s requirements
                        <ul>
                            <li>
                                Input and edited songs detail on Telkom Indonesia project as the editor for Telkom’s RBT songs list data.
                            </li>
                            <li>
                                Developed the user interface for Neuron’s contact us webpage.                            </li>
                        </ul>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Experience
