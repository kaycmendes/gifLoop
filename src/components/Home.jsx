import React, { Component } from 'react';
import { Navbar, Nav, Jumbotron, Container, Form, Row, Col } from 'react-bootstrap';

class Home extends Component {

    render() {
        return (
            <>
                <div className="ml-5 mr-5" >
                    <Navbar className="justify-content-md-center navbar" bg="light" variant="light">
                        <Navbar.Brand className="" href="#home">gifLoop</Navbar.Brand>
                        <Nav className="ml-auto ">
                            <Nav.Link href="#home">About</Nav.Link>
                            <Nav.Link href="#features">Why?</Nav.Link>
                            <Nav.Link href="#pricing">How?</Nav.Link>
                        </Nav>
                    </Navbar>
                </div>
                <div className="text-center w-80 jumbo-wrapper">
                    <Jumbotron className="bg-primary" fluid>
                        <Container>
                            <h1>Fluid jumbotron</h1>
                            <p>
                                This is a modified jumbotron that occupies the entire horizontal space of
                                its parent.
                        </p>
                        </Container>
                    </Jumbotron>
                    <div className="search-bar">
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Control placeholder="Search for a gif" />
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </>
        );
    }
}

export default Home;