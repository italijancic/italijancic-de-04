import { Router } from 'express'

import * as views from '../controllers/views.controllers.js'

const router = Router()

router.get('/', views.getHome)


router.get('/realTimeProducts', views.getRealTimeProducts)

export default router