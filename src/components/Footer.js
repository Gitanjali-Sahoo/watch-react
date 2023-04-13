import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components'

function Footer() {
    return (
        <Wrap>
            <Container>
                <Row>
                    <Col
                        xs={{ order: 'last' }}
                        style={{ fontWeight: 'bold', fontSize: '20px' }}
                    >
                        Contact US
                    </Col>
                    <Col xs style={{ fontWeight: 'bold', fontSize: '20px' }}>
                        About TimeZen
                    </Col>
                    <Col
                        xs={{ order: 'first' }}
                        style={{ fontWeight: 'bold', fontSize: '20px' }}
                    >
                        Buy On TimeZen
                    </Col>
                </Row>
                <Row>
                    <Col xs={{ order: 'last' }}>Contact</Col>
                    <Col xs>About Us</Col>
                    <Col xs={{ order: 'first' }}>24 hrs buyer protection</Col>
                </Row>
                <Row>
                    <Col xs={{ order: 'last' }}>Accessibility</Col>
                    <Col xs>Jobs </Col>
                    <Col xs={{ order: 'first' }}>Easy return</Col>
                </Row>
                <Row>
                    <Col xs={{ order: 'last' }}>Customer Care</Col>
                    <Col xs>Press</Col>
                    <Col xs={{ order: 'first' }}>Authenticity Guarantee</Col>
                </Row>
            </Container>
            <div className="footer-text">
                <p>Copyright &copy; 2023 by TimeZen | All Rights Reserved.</p>
            </div>
        </Wrap>
    )
}

export default Footer
const Wrap = styled.div`
    background-color: white;

    padding-top: 30px;
    justify-content: center;
    align-items: center;

    .footer-text {
        padding-top: 30px;
        text-align: center;
        font-weight: bold;
    }
`
