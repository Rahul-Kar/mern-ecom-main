import Order from '../models/orderModel.js';
import asyncHandler from 'express-async-handler';

// @desc create new Order
// @route POST /api/orders
// @access public
const addOrderItems = asyncHandler(async(req, res) => {
    const { orderItems, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice } = req.body
    
    if(orderItems && orderItems.length === 0){
        res.status(400)
        throw new Error('No order Items')
        return
    } else {
        const order = new Order({
            orderItems, 
            user: req.user._id,
            shippingAddress, 
            paymentMethod, 
            itemsPrice, 
            taxPrice, 
            shippingPrice, 
            totalPrice
            
        })

        const createdOrder = await order.save();

        res.status(201).json(createdOrder)

    }
})



// @desc get Order by ID
// @route GET /api/orders/:id
// @access private
const getOrderById = asyncHandler(async(req, res) => {
    const order = await Order.findById(req.params.id).populate('user', 'name email')
    if(order){
        res.json(order)
    }else{
        res.status(404)
        throw new Error('Order not found')
    }
})



// @desc Update Order to Delivered
// @route GET /api/orders/:id/deliver
// @access private/api
const  updateOrderToDeliverd = asyncHandler(async(req, res) => {
    const order = await Order.findById(req.params.id)
    if(order){
        order.isDeleverd = true
        order.deliveredAt = Date.now()

        const updatedOrder = await order.save()

        res.json(updatedOrder)
    }else{
        res.status(404)
        throw new Error('Order not found')
    }
})



// @desc Update Order to Pay
// @route GET /api/orders/:id/psy
// @access private
const updateOrderToPaid  = asyncHandler(async(req, res) => {
    const order = await Order.findById(req.params.id).populate('user', 'name email')
    if(order){
        order.isPaid = true,
        order.paidAt = Date.now(),
        order.PaymentResult = {
            id: req.body.id,
            status: req.body.status,
            update_time: req.body.update_time,
            email_address: req.body.email_address
        }

        const updatedOrder = await order.save()

        res.json(updatedOrder)
    }else{
        res.status(404)
        throw new Error('Order not found')
    }
})



// @desc Get logged in user Orders
// @route GET /api/orders/myorders
// @access private
const getMyOrders = asyncHandler(async(req, res) => {
    const orders = await Order.find({user: req.user._id})
    res.json(orders)
})



// @desc Get all Orders
// @route GET /api/orders/myorders
// @access private/ admin
const getOrders = asyncHandler(async(req, res) => {
    const orders = await Order.find({}).populate('user', 'id name')
    res.json(orders)
})

export { addOrderItems, getOrderById, updateOrderToPaid, getMyOrders, getOrders, updateOrderToDeliverd }