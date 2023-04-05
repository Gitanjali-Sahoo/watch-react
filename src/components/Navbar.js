import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { Heart } from 'react-bootstrap-icons'
import { Person } from 'react-bootstrap-icons'
import { Cart } from 'react-bootstrap-icons'

function OffcanvasExample() {
    return (
        <>
            {[false].map((expand) => (
                <Navbar
                    key={expand}
                    bg="light"
                    expand={expand}
                    className="mb-3"
                >
                    <Container fluid>
                        {/* <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand> */}
                        <Navbar.Toggle
                            aria-controls={`offcanvasNavbar-expand-${expand}`}
                        />
                        <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
                        {/* <Heart color="red" size={32} /> */}
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
                        <div className="nav-icon">
                            <Heart color="black" size={32} />
                            <Cart color="black" size={32} />

                            <Person color="black" size={32} />
                        </div>
                        {/* <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand> */}
                    </Container>
                </Navbar>
            ))}
        </>
    )
}

export default OffcanvasExample