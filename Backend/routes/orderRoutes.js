import express from 'express';
import { addOrderItems, getMyOrders, getOrderById, getOrders, updateOrderToDeliverd, updateOrderToPaid } from '../controller/orderController.js';
const router = express.Router();
import { admin, protect } from '../middleware/authMiddleware.js';

router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders)
router.route('/myorders').get(protect, getMyOrders)
router.route('/:id').get(protect, getOrderById)
router.route('/:id/pay').put(protect, updateOrderToPaid)
router.route('/:id/deliver').put(protect, admin, updateOrderToDeliverd)


export default router;