import { Router } from 'express'
const router = Router()


import { authController } from '../controllers/authController.js'

router.post('/', authController)

export default router