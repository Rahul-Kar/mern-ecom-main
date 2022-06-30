import axios from "axios";
import { OREDER_CREATE_FAIL, OREDER_CREATE_REQUEST, OREDER_CREATE_SUCCESS, OREDER_DELIVERED_FAIL, OREDER_DELIVERED_REQUEST, OREDER_DELIVERED_SUCCESS, OREDER_DETAILS_FAIL, OREDER_DETAILS_REQUEST, OREDER_DETAILS_SUCCESS, OREDER_LIST_FAIL, OREDER_LIST_MY_FAIL, OREDER_LIST_MY_REQUEST, OREDER_LIST_MY_SUCCESS, OREDER_LIST_REQUEST, OREDER_LIST_SUCCESS, OREDER_PAY_FAIL, OREDER_PAY_REQUEST,  OREDER_PAY_SUCCESS } from "../constants/orderConstsants";


export const createOrder = ( order ) => async(dispatch, getState) => {
    try{
        dispatch({
            type: OREDER_CREATE_REQUEST
        });

        const { userLogin:{userInfo} } = getState()
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        
        const { data } = await axios.post(`/api/orders`, order, config)
        console.log(data);

        dispatch({
            type: OREDER_CREATE_SUCCESS,
            payload: data
        })


    }catch(error){
        dispatch({
            type: OREDER_CREATE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message 
        })
    }
}



export const getOrderDetails = ( id ) => async(dispatch, getState) => {
    try{
        dispatch({
            type: OREDER_DETAILS_REQUEST
        });

        const { userLogin:{userInfo} } = getState()
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        
        const { data } = await axios.get(`/api/orders/${id}`, config)

        dispatch({
            type: OREDER_DETAILS_SUCCESS,
            payload: data
        })


    }catch(error){
        dispatch({
            type: OREDER_DETAILS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message 
        })
    }
}




export const payOrder = ( orderId, paymentResult ) => async(dispatch, getState) => {
    try{
        dispatch({
            type: OREDER_PAY_REQUEST
        });

        const { userLogin:{userInfo} } = getState()
        const config = {
            headers: {
                'Content-Type' : 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        
        const { data } = await axios.put(`/api/orders/${orderId}/pay`, paymentResult, config)

        dispatch({
            type: OREDER_PAY_SUCCESS,
            payload: data
        })


    }catch(error){
        dispatch({
            type: OREDER_PAY_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message 
        })
    }
}




export const deliverOrder = ( order ) => async(dispatch, getState) => {
    try{
        dispatch({
            type: OREDER_DELIVERED_REQUEST
        });

        const { userLogin:{userInfo} } = getState()
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        
        const { data } = await axios.put(`/api/orders/${order._id}/deliver`, {}, config)

        dispatch({
            type: OREDER_DELIVERED_SUCCESS,
            payload: data
        })


    }catch(error){
        dispatch({
            type: OREDER_DELIVERED_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message 
        })
    }
}


export const ListMyOrders = () => async(dispatch, getState) => {
    try{
        dispatch({
            type: OREDER_LIST_MY_REQUEST
        });

        const { userLogin:{userInfo} } = getState()
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        
        const { data } = await axios.get(`/api/orders/myorders`, config)
        
        dispatch({
            type: OREDER_LIST_MY_SUCCESS,
            payload: data
        })


    }catch(error){
        dispatch({
            type: OREDER_LIST_MY_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message 
        })
    }
}



export const ListOrders = () => async(dispatch, getState) => {
    try{
        dispatch({
            type: OREDER_LIST_REQUEST
        });

        const { userLogin:{userInfo} } = getState()
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        
        const { data } = await axios.get(`/api/orders`, config)
        
        dispatch({
            type: OREDER_LIST_SUCCESS,
            payload: data
        })


    }catch(error){
        dispatch({
            type: OREDER_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message 
        })
    }
}