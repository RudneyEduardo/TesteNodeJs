import { Router } from 'express'
const router = Router()


//*Authentication Function 
import { authenticateToken } from '../utils/authenticate.js'

//*Controllers
import { cepController } from '../controllers/CepController.js'

/**
 * @swagger
 * components:
 *   schemas:
 *     Cep:
 *       type: object
 *       required:
 *         - cep
 *       properties:
 *         cep:
 *           type: string
 *           description: Cep a ser buscado
 *       example:
 *         cep: 14340970
 */

 /**
  * @swagger
  * tags:
  *   name: CEP
  *   description: Api de consulta de CEP
  */

/**
 * @swagger
 * /cep:
 *   get:
 *     summary: Retorna as informações do CEP buscado
 *     tags: [CEP]
 *     responses:
 *       200:
 *         description: Informações sobre o CEP
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Cep'
 */

router.get('/:cep', authenticateToken, cepController)

export default router