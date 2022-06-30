import { OREDER_CREATE_FAIL, OREDER_CREATE_REQUEST, OREDER_CREATE_RESET, OREDER_CREATE_SUCCESS, OREDER_DELIVERED_FAIL, OREDER_DELIVERED_REQUEST, OREDER_DELIVERED_RESET, OREDER_DELIVERED_SUCCESS, OREDER_DETAILS_FAIL, OREDER_DETAILS_REQUEST, OREDER_DETAILS_REST, OREDER_DETAILS_SUCCESS, OREDER_LIST_FAIL, OREDER_LIST_MY_FAIL, OREDER_LIST_MY_REQUEST, OREDER_LIST_MY_RESET, OREDER_LIST_MY_SUCCESS, OREDER_LIST_REQUEST, OREDER_LIST_SUCCESS, OREDER_PAY_FAIL, OREDER_PAY_REQUEST, OREDER_PAY_RESET, OREDER_PAY_SUCCESS} from '../constants/orderConstsants'


export const orderCreateReducer = ( state = {}, action) => {
    switch(action.type){
        case OREDER_CREATE_REQUEST:
            return {
                loading: true
            }

        case OREDER_CREATE_SUCCESS:
        return {
            loading: false,
            success: true,
            order: action.payload
        }

        case OREDER_CREATE_FAIL:
        return{
            loading: false,
            error: action.payload
        }

        case OREDER_CREATE_RESET:
        return {}

        default:
            return state;
    }
}


export const orderDetailsReducer = ( state = {loading: true, orderItems:[], shippingAdress: {}}, action) => {
    switch(action.type){
        case OREDER_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case OREDER_DETAILS_SUCCESS:
        return {
            loading: false,
            order: action.payload
        }

        case OREDER_DETAILS_FAIL:
        return{
            loading: false,
            error: action.payload
        }

        case OREDER_DETAILS_REST:
        return { loading: true, orderItems:[], shippingAdress: {} }

        default:
            return state;
    }
}


export const orderPayReducer = ( state = { }, action) => {
    switch(action.type){
        case OREDER_PAY_REQUEST:
            return {
                ...state,
                loading: true
            }

        case OREDER_PAY_SUCCESS:
        return {
            loading: false,
            success: true
        }

        case OREDER_PAY_FAIL:
        return{
            loading: false,
            error: action.payload
        }

        case OREDER_PAY_RESET:
            return {}

        default:
            return state;
    }
}



export const orderDelivereReducer = ( state = { }, action) => {
    switch(action.type){
        case OREDER_DELIVERED_REQUEST:
            return {
                ...state,
                loading: true
            }

        case OREDER_DELIVERED_SUCCESS:
        return {
            loading: false,
            success: true
        }

        case OREDER_DELIVERED_FAIL:
        return{
            loading: false,
            error: action.payload
        }

        case OREDER_DELIVERED_RESET:
            return {}

        default:
            return state;
    }
}




export const orderListMyReducer= ( state = { }, action) => {
    switch(action.type){
        case OREDER_LIST_MY_REQUEST:
            return {
                ...state,
                loading: true
            }

        case OREDER_LIST_MY_SUCCESS:
        return {
            loading: false,
            orders: action.payload
        }

        case OREDER_LIST_MY_FAIL:
        return{
            loading: false,
            error: action.payload
        }

        case OREDER_LIST_MY_RESET:
            return{
                orders: []
            }

        default:
            return state;
    }
}


export const orderListReducer= ( state = { }, action) => {
    switch(action.type){
        case OREDER_LIST_REQUEST:
            return {
                ...state,
                loading: true
            }

        case OREDER_LIST_SUCCESS:
        return {
            loading: false,
            orders: action.payload
        }

        case OREDER_LIST_FAIL:
        return{
            loading: false,
            error: action.payload
        }

        default:
            return state;
    }
}