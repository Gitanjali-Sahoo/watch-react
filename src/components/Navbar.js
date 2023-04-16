import Container from 'react-bootstrap/Container'

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import Offcanvas from 'react-bootstrap/Offcanvas'
import { Heart, Cart, Person } from 'react-bootstrap-icons'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import LoginPopup from '../components/LoginPopup'

function OffcanvasExample() {
    const [showLoginPopup, setShowLoginPopup] = useState(false)

    function handleLoginClick() {
        setShowLoginPopup(true)
    }

    function handleCloseClick() {
        setShowLoginPopup(false)
    }

    return (
        <Wrap>
            {[false].map((expand) => (
                <Navbar
                    style={{ backgroundColor: 'rgb(211, 229, 236)', padding: '0'}}
                    key={expand}
                    expand={expand}

                >
                    <Container fluid>
                        <Navbar.Toggle
                            aria-controls={`offcanvasNavbar-expand-${expand}`}
                        />

                        <Link
                            className="Navbar.Brand"
                            style={{
                                fontSize: '35px',
                                color: 'black',
                                textDecorationLine: 'none'
                            }}
                            to="/"
                        >
                            TimeZen
                        </Link>

                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="start"
                            style={{backgroundColor:'rgb(211, 229, 236)'}}
                        >
                            <Offcanvas.Header closeButton>
                                <Link
                                    id={`offcanvasNavbarLabel-expand-${expand}`}
                                    className="Offcanvas.Title"
                                    style={{
                                        fontSize: '25px',
                                        color: 'black',
                                        textDecorationLine: 'none'
                                    }}
                                    to="/"
                                >
                                    TimeZen
                                </Link>

                                {/* <Offcanvas.Title
                                    id={`offcanvasNavbarLabel-expand-${expand}`}
                                >
                                    TimeZen
                                </Offcanvas.Title> */}
                            </Offcanvas.Header>
                            <Offcanvas.Body >
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Link className="Nav-Link" to="/about">
                                        About
                                    </Link>
                                    <Link className="Nav-Link" to="/form">
                                        Contact
                                    </Link>
                                    <Link
                                        className="Nav-Link"
                                        onClick={handleLoginClick}
                                    >
                                        Login
                                        <Person />
                                    </Link>
                                    {showLoginPopup && (
                                        <LoginPopup
                                            onClose={handleCloseClick}
                                        />
                                    )}
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>

                        <NavIcons>
                            <Heart />
                            <Cart />
                            {/* <Person /> */}

                            {/* <button onClick={handleLoginClick}>
                                <Person />
                            </button> */}
                        </NavIcons>
                    </Container>
                </Navbar>
            ))}
        </Wrap>
    )
}

export default OffcanvasExample

//Using styled components

const Wrap = styled.div`

`

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
