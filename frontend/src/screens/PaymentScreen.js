import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../actions/cartActions'
import CheckOutSteps from '../components/CheckOutSteps';
import MetaComponent from '../components/Meta';

const PaymentScreen = ({history}) => {
    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    if(!shippingAddress){
        history.push('/shipping')
    }

    const [ paymentMethod, setPaymentMethod ] = useState('PayPal')

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod( paymentMethod ))
        history.push('/placeorder')
    }
    return (
        <Container>
        <MetaComponent title='Ecom - Payment Method'/>
            <Row className='justify-content-md-center'>
                <Col xs={12} md={6}>
                <CheckOutSteps step1 step2/>
                <h1>Payment Method</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label as="legend">Select Method</Form.Label>
                    <Form.Check 
                    type='radio' 
                    label='paypal or Credit Card' 
                    id="PayPal" 
                    name='paymentmethod' 
                    value='PayPal' 
                    checked 
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    >
                    </Form.Check>
                </Form.Group>
                <Button className='mt-3' type='submit' variant='primary'>Continue</Button>
            </Form>
                </Col>
            </Row>
        </Container>
           
    )
}

export default PaymentScreen
