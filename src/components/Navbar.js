import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { Heart, Cart, Person } from 'react-bootstrap-icons'



import styled from 'styled-components'

function OffcanvasExample() {
    return (
        <>
            {[false].map((expand) => (
                <Navbar
                    style={{ backgroundColor: '#C1C35B', padding: '0' }}
                    key={expand}
                    expand={expand}
                >
                    <Container fluid>
                        <Navbar.Toggle
                            aria-controls={`offcanvasNavbar-expand-${expand}`}
                        />
                        <Navbar.Brand href="#" style={{ fontSize: '35px' }}>
                            Navbar Offcanvas
                        </Navbar.Brand>

                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="start"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title
                                    id={`offcanvasNavbarLabel-expand-${expand}`}
                                >
                                    Offcanvas
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">

                                    <Nav.Link href="#action1">Home</Nav.Link>

                                    <Nav.Link href="#action2">Link</Nav.Link>
                                    <NavDropdown
                                        title="Dropdown"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    >
                                        <NavDropdown.Item href="#action3">
                                            Action
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">
                                            Something else here
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-success">
                                        Search
                                    </Button>
                                </Form>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>

                        <NavIcons>
                            <Heart />
                            <Cart />
                            <Person />
                        </NavIcons>
                    </Container>
                </Navbar>
            ))}
        </>
    )
}

export default OffcanvasExample

//Using styled components

const NavIcons = styled.div`
    display: flex;

    align-items: center;
    justify-content: center;
    gap: 10px;
    & svg {
        color: black;
        height: 30px;
        width: 30px;
    }
`
