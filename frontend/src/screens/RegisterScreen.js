import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { register } from '../actions/userActions'
import Message from '../components/Message'
import Loader from '../components/Loader';
import MetaComponent from '../components/Meta'

const RegisterScreen = ({ location, history }) => {

    const [ name, setName] = useState('');
    const [ email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();

    const userRegister = useSelector(state=> state.userRegister)
    console.log(userRegister);
    const { loading, error, userInfo } = userRegister

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if(userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const style= {
        display: 'none'
    }

    const submitHandler = (e) => {
        e.preventDefault()
        if(password !== confirmPassword) {
            setMessage('Password does not match')
        } else {
            dispatch(register(name, email, password))
            setMessage('')
        }
    }

    return (
        <Container>
        <Row className='justify-content-md-center'>
                <Col xs={12} md={6}>
                    <h1>Sign Up</h1>
                    <MetaComponent title='Register to Ecom'/>
                    { message && <Message style={message==='' && style} variant='danger'>{message}</Message>}
                    { error && <Message variant='danger'>{error}</Message>}
                    {loading && <Loader/>}
                    <Form onSubmit={submitHandler}>

                        <Form.Group controlId='name'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                            type='name'
                            placeholder='Enter name'
                            value={name} 
                            onChange={(e) => setName(e.target.value)}>
                            </Form.Control>
                        </Form.Group>


                        <Form.Group controlId='email'>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                            type='email'
                            placeholder='Enter Email'
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                            type='password'
                            placeholder='Enter password'
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='confirmPassword'>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                            type='password'
                            placeholder='Confirm password'
                            value={confirmPassword} 
                            onChange={(e) => setConfirmPassword(e.target.value)}>
                            </Form.Control>
                        </Form.Group>

                        <Button className='mt-3' type="submit" variant='primary' >Register</Button>
                    </Form>

                    <Row className='py-3'>
                        <Col>
                            have an account? {' '}
                            <Link to={redirect ? `/login?redirect=${redirect}`: '/login'}>Login</Link>      
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default RegisterScreen;
