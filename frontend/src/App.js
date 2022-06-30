import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from 'react-bootstrap';
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProductScreen from "./screens/ProductScreen";
import React from 'react';
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import { useSelector } from "react-redux";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/orderScreen";
import userListScreen from "./screens/userListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/productEditScreen";
import orderListScreen from "./screens/orderListScreen";
import OrderAdminScreen from "./screens/orderAdminScreen";


function App() {

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin
  return (
    <Router>
      <div className="App">
      <Header/>
        <main className="py-3">
          <Container>
            <Route exact path='/' component={HomeScreen}/>
            <Route exact path='/page/:pageNumber' component={HomeScreen}/>
            <Route exact path='/search/:keyword/page/:pageNumber'  component={HomeScreen}/>
            <Route path='/search/:keyword' exact component={HomeScreen}/>
            <Route path="/product/:id" component={ProductScreen}/>
            <Route path="/cart/:id?" component={userInfo ? CartScreen : LoginScreen}/>
            <Route path="/login" component={LoginScreen}/>
            <Route path="/register" component={RegisterScreen}/>
            <Route path='/profile' component={ProfileScreen}/>
            <Route path='/shipping' component={userInfo ? ShippingScreen : LoginScreen}/>
            <Route path='/payment' component={userInfo ? PaymentScreen : LoginScreen}/>
            <Route path='/placeorder' component={userInfo ? PlaceOrderScreen : LoginScreen}/>
            <Route path='/order/:id' component={userInfo ? OrderScreen : LoginScreen}/>
            <Route path='/admin/userlist' component={userInfo ? userListScreen : LoginScreen}/>
            <Route path='/admin/productlist' exact component={userInfo ? ProductListScreen : LoginScreen}/>
            <Route path='/admin/productlist/:pageNumber' exact component={userInfo ? ProductListScreen : LoginScreen}/>
            <Route path='/admin/orderlist' component={userInfo ? orderListScreen : LoginScreen}/>
            <Route path='/admin/product/:id/edit' component={userInfo ? ProductEditScreen : LoginScreen}/>
            <Route path='/admin/order/:id' component={userInfo ? OrderAdminScreen : LoginScreen}/>
            <Route path='/admin/users/:id/edit' component={userInfo ? UserEditScreen : LoginScreen}/>
          </Container>
        </main>
      <Footer/> 
      </div>
   </Router>
  );
}

export default App;
