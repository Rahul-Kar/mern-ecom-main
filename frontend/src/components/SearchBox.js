import React, { useState } from 'react'
import {Button, Form} from 'react-bootstrap';

const SearchBox = ({history}) => {

    const [keyword, setKeyword] = useState('')
    
    const submitHandler = (e) => {
        e.preventDefault()
        if(keyword.trim()) {
            history.push(`/search/${keyword}`)
        } else {
            history.push('/')
        }
    }
    return (
            <Form className='search mt-sm-2 col-md-8 col-lg-6' onSubmit={submitHandler}>
                <Form.Control type='text' name='q' onChange={(e) => setKeyword(e.target.value)} placeholder='Search Products...' className=' ml-sm-5'></Form.Control>
                <Button type='submit' variant='outline-success' className='mx-2 p-2'>
                    Search
                </Button>
            </Form>
    )
}

export default SearchBox
