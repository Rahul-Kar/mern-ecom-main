import express from 'express';
import { admin, protect } from '../middleware/authMiddleware.js';
import { createProduct, createProductReview, deleteProduct, getProductById, getProducts, getTopProducts, updateProduct } from '../controller/productController.js';
const router = express.Router();

router.route('/').get(getProducts).post(protect, admin, createProduct);
router.get('/top', getTopProducts)
router.route('/:id').get(getProductById).delete(protect, admin, deleteProduct).put(protect, admin, updateProduct);
router.route('/:id/reviews').post(protect, createProductReview)


export default router;