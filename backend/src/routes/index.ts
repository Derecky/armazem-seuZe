import { Router } from 'express';
import { productsRouter } from './products.routes';
import { categoryRouter } from './category.routes';

const router = Router();

router.use('/products', productsRouter);
router.use('/category', categoryRouter);


export { router };