import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import TypeBar from '../components/TypeBar'

export default function Shop() {
    return (
        <Container>
            <Row className="mt-2"> 
                <Col md={3}>
                <TypeBar></TypeBar>
                </Col>
                <Col md={9}>
                
                </Col>
            </Row>
        </Container>
    )
}
