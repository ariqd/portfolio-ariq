import React from 'react';
import {
    BrowserRouter as Router,
    // Switch,
    Route,
    Link
} from "react-router-dom";
import Container from 'react-bootstrap/container';
import Navbar from 'react-bootstrap/navbar';
import Nav from 'react-bootstrap/nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Ariq Daffa',
            headerLink: [
                {title: 'Home', path: '/'},
                {title: 'About', path: '/about'},
                {title: 'Contact', path: '/contact'},
            ],
            home: {
                title: "Hi, I'm Ariq",
                subtitle: "Full Stack Web & Mobile Developer",
                text: 'Check out my projects below!'
            },
            about: {
                title: 'About Me',
                subtitle: 'Ariq Daffa Athallah Putra'
            },
            contact: {
                title: 'Lets Talk',
            }
        }
    }

    render() {
        return (
            <Router>
                <Container className="p-0 bg-light" fluid={true}>
                    <Navbar className="border-bottom" bg="light" expand="lg">
                        <Container>
                            <Navbar.Brand>Ariq Daffa Athallah Putra</Navbar.Brand>
                            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
                            <Navbar.Collapse id="navbar-toggle">
                                <Nav className="ml-auto">
                                    <Link className="nav-link" to="/">Home</Link>
                                    <Link className="nav-link" to="/about">About</Link>
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>

                    <Route path="/" exact render={() =>
                        <HomePage title={this.state.home.title}
                                  subtitle={this.state.home.subtitle}
                                  text={this.state.home.text}/>}/>
                    <Route path="/about" exact render={() =>
                        <AboutPage title={this.state.about.title}
                                   subtitle={this.state.about.subtitle}/>}/>
                    <Route path="/contact" exact render={() =>
                        <ContactPage title={this.state.contact.title}/>}/>

                    <Footer/>
                </Container>
            </Router>
        );
    }
}

export default App;
