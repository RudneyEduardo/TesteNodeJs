import { Router } from 'express'
const router = Router()


import { authController } from '../controllers/authController.js'


/**
 * @swagger
 * components:
 *   schemas:
 *     auth:
 *       type: object
 *       required:
 *         - username
 *         - password
 *       properties:
 *         username:
 *           type: string
 *           description: Nome do usuário
 *         password:
 *           type: string
 *           description: Senha do usuário
 *       example:
 *         username: rudney
 *         password: teste
 */

 /**
  * @swagger
  * tags:
  *   name: Auth
  *   description: Api de Autenticação
  */

/**
 * @swagger
 * /auth:
 *   post:
 *     summary: Retorna access token para chamada da api de CEP
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: Token De Acesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/auth'
 */


router.post('/', authController)

export default router