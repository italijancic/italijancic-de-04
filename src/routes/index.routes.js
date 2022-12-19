import { Router } from 'express'

import viewsRouter from './views.routes.js'
import productsRoutes from './products.routes.js'
import cartsRoutes from './carts.routes.js'

const router = Router()

// Views
router.use('/', viewsRouter)

// Products API
router.use('/api/products', productsRoutes)

// Carts API
router.use('/api/carts', cartsRoutes)

export default router