/**
 * @swagger
 * tags:
 *  name:User
 *  description:User managing API
 */

//User create account enpoint
/**
 * @swagger
 * api/v1/user:
 *   post:
 *     tags:
 *       - User
 *     description: Create Account
 *     parameters:
 *       - name: reqBody
 *         description: request body
 *         in: body
 *         schema:
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *             country:
 *               type: string
 *             phone:
 *               type: string
 *             password:
 *               type: string
 *
 *           required:
 *             - email
 *             - country
 *             - phone
 *             - password
 *     responses:
 *       '200':
 *         description: A successful response
 *       '400':
 *         description: User already exist
 */
//user create account endpoint end

//user login endpoint
/**
 * @swagger
 * /apiv1//user/login:
 *   post:
 *     tags:
 *       - User
 *     description: Login
 *     parameters:
 *       - name: reqBody
 *         description: request body
 *         in: body
 *         schema:
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *             password:
 *               type: string
 *
 *           required:
 *             - email
 *             - password
 *     responses:
 *       '200':
 *         description: A successful response
 *       '401':
 *         description: Wrong password
 *       '404':
 *         description: User not found
 */
//user login endpoint end
