import { Router } from 'express'

import * as views from '../controllers/views.controllers.js'

const router = Router()

router.get('/', views.getHome)

export default router