import React, { Component } from 'react';
import { Navbar, Nav, Jumbotron, Container, Form, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';

class Home extends Component {

    render() {
        return (
            <>
                <div className="nav-wrapper" >
                    <Navbar className="justify-content-md-center navbar ml-5 mr-5" bg="light" variant="light">
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
                    <div className="searchBar-wrapper">
                        <Form className="size-lg">
                            <Row>
                                <Col>
                                    <InputGroup className="searchBar">
                                        <FormControl />
                                        <Button variant="primary">Search</Button>
                                    </InputGroup>

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