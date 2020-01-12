import React from 'react';

import Card from '../components/Card';

import kawasaki from '../assets/images/kawasaki-greentech-ecommerce.png';
import caktopan from '../assets/images/caktopan.png';
import vsp from '../assets/images/vsp.png';
import bcs from '../assets/images/bcs.png';
import superbrands from '../assets/images/superbrands.png';
import ipro from '../assets/images/ipro.png';
import abs from '../assets/images/abs.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Superbrands Smart Baby League',
                    subTitle: 'Android + iOS app made with Flutter',
                    imgSrc: superbrands,
                    link: 'https://play.google.com/store/apps/details?id=com.wtd.flutter_futsal_app',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Kawasaki Greentech',
                    subTitle: 'E-commerce & Admin Panel',
                    imgSrc: kawasaki,
                    link: 'http://www.kawasakigreentech.co.id/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Bandung Choral Society',
                    subTitle: 'Choir Event Organizer',
                    imgSrc: bcs,
                    link: 'http://bandungchoral.com',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Aisyiyah Boarding School',
                    subTitle: 'Pesantren landing page and Admin',
                    imgSrc: abs,
                    link: 'http://store.absbandung.sch.id/',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Cak Topan Penyetan',
                    subTitle: 'Restaurant Landing Page',
                    imgSrc: caktopan,
                    link: 'https://github.com/ariqd/caktopan',
                    selected: false
                },
                {
                    id: 5,
                    title: 'iPro',
                    subTitle: 'ERP System for iPro - Authorized Conwood Dealer',
                    imgSrc: ipro,
                    link: 'https://github.com/ariqd/ipro',
                    selected: false
                },
                {
                    id: 6,
                    title: 'Verry Sitorus & Partners',
                    subTitle: 'Law firm landing page',
                    imgSrc: vsp,
                    link: 'http://vsp.co.id',
                    selected: false
                },
            ]
        }
    }



    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = !items[id].selected;

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    };


    makeItems = (items) => {
        return items.map(item => {
            return (
                <Col md={4} className="mb-4">
                    <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id}/>
                </Col>
            )
        })
    };


    render() {
        return (
            <Container fluid={false}>
                <Row className=" text-center">
                    {this.makeItems(this.state.items)}
                    <Col md={4} className="mb-4 border d-flex align-items-center justify-content-center">
                        <p className="text-secondary">More coming soon!</p>
                    </Col>
                </Row>
            </Container>
        );
    }

}

export default Carousel;