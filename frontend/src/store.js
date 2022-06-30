import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productCreateReducer, productDeleteReducer, productDetailsReducer, productListReducer, productReviewCreateReducer, productTopRatedReducer, productUpdateReducer } from './reducer/productReducers';
import { cartReducer } from './reducer/CartReducers';
import { updateProfileReducer, userDeleteReducer, userDetailsReducer, userListReducer, userLoginReducer, userRegisterReducer, userUpdateReducer } from './reducer/userReducers';
import { orderCreateReducer, orderDelivereReducer, orderDetailsReducer, orderListMyReducer, orderListReducer, orderPayReducer } from './reducer/OrderReducers';


const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    productDelete: productDeleteReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    productReviewCreate: productReviewCreateReducer,
    productTopRated: productTopRatedReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
    userUpdateProfile: updateProfileReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderDeliver: orderDelivereReducer,
    orderListMy: orderListMyReducer,
    orderList: orderListReducer
    
});

const cartItemsFromStorage = localStorage.getItem('cartItems') 
? JSON.parse(localStorage.getItem('cartItems')) 
: []

const userInfoFromStorage = localStorage.getItem('userInfo') 
? JSON.parse(localStorage.getItem('userInfo')) 
: null

const shippingFromStorage = localStorage.getItem('sippingAddress') 
? JSON.parse(localStorage.getItem('sippingAddress')) 
: {}

const initialState= {
    cart: {
        cartItems: cartItemsFromStorage,
        shippingAddress: shippingFromStorage
    },
    userLogin: {userInfo: userInfoFromStorage}
}

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))


export default store;