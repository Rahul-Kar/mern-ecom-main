import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const FormComponents = ({Children}) => {
    return (
        <Container>
            <Row className='justify-content-md-center'>
                <Col xs={12} md={6}>
                    {Children}
                </Col>
            </Row>
        </Container>
    )
}

export default FormComponents;
