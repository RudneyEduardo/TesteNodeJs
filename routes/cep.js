import { Router } from 'express'
const router = Router()


//*Authentication Function 
import { authenticateToken } from '../utils/authenticate.js'

//*Controllers
import { cepController } from '../controllers/CepController.js'

router.get('/:cep', authenticateToken, cepController)

export default router