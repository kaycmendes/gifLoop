import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

import { Navbar, Nav, NavItem } from 'react-bootstrap';
export default function Header() {
    return (
        <>
                <div id="notification" > Copied</div>
            <div className="nav-wrapper" >
                <Navbar className="justify-content-md-center navbar ml-5 mr-5" bg="light" variant="light">
                    <Navbar.Brand className="" href="/">gifLoop</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link>
                            <LinkContainer to="/">
                                <NavItem>Home</NavItem>
                            </LinkContainer>
                        </Nav.Link>
                        <Nav.Link>
                            <LinkContainer to="/about">
                                <NavItem>About</NavItem>
                            </LinkContainer>
                        </Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        </>
    );
}
