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
                    <Col xs={{ order: 'last' }}>First, but last</Col>
                    <Col xs>Second, but unordered</Col>
                    <Col xs={{ order: 'first' }}>Third, but first</Col>
                </Row>
                <Row>
                    <Col xs={{ order: 'last' }}>First, but last</Col>
                    <Col xs>Second, but unordered</Col>
                    <Col xs={{ order: 'first' }}>Third, but first</Col>
                </Row>
                <Row>
                    <Col xs={{ order: 'last' }}>First, but last</Col>
                    <Col xs>Second, but unordered</Col>
                    <Col xs={{ order: 'first' }}>Third, but first</Col>
                </Row>
                <Row>
                    <Col xs={{ order: 'last' }}>First, but last</Col>
                    <Col xs>Second, but unordered</Col>
                    <Col xs={{ order: 'first' }}>Third, but first</Col>
                </Row>
                <Row>
                    <Col xs={{ order: 'last' }}>First, but last</Col>
                    <Col xs>Second, but unordered</Col>
                    <Col xs={{ order: 'first' }}>Third, but first</Col>
                </Row>
            </Container>
        </Wrap>
    )
}

export default Footer
const Wrap = styled.div`
    background-color: white;
`
