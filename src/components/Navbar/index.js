import React from 'react';
import {
    Navbar,
    Container
} from 'react-bootstrap';

const NavComponent = ({title}) => {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/">{title}</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default NavComponent;