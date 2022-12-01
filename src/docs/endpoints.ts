//User create account enpoint
/**
 * @swagger
 * /api/v1/user:
 *   post:
 *     tags:
 *       - Create account
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
 *       - User signin
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

//User create account enpoint
/**
 * @swagger
 * /api/v1/story:
 *   post:
 *     tags:
 *       - Create a story
 *     description: A publisher creates a story
 *     parameters:
 *       - name: reqBody
 *         description: request body
 *         in: body
 *         schema:
 *           type: object
 *           properties:
 *             title:
 *               type: string
 *             text:
 *               type: string
 *
 *           required:
 *             - title
 *             - text
 *     responses:
 *       '200':
 *         description: A successful response
 */
//user create account endpoint end

//User create account enpoint
/**
 * @swagger
 * /api/v1/story/publish:
 *   post:
 *     tags:
 *       - Publish a story
 *     description: Publish a story
 *     parameters:
 *       - name: reqBody
 *         description: request body
 *         in: body
 *         schema:
 *           type: object
 *           properties:
 *             storyId:
 *               type: string
 *
 *           required:
 *             - storyId
 *     responses:
 *       '200':
 *         description: A successful response
 *       '400':
 *         description: Story does not exist
 */
//user create account endpoint end

//User create account enpoint
/**
 * @swagger
 * /api/v1/story/unpublish:
 *   post:
 *     tags:
 *       - Unpublish a story
 *     description: unpublish a story
 *     parameters:
 *       - name: reqBody
 *         description: request body
 *         in: body
 *         schema:
 *           type: object
 *           properties:
 *             storyId:
 *               type: string
 *
 *           required:
 *             - storyId
 *     responses:
 *       '200':
 *         description: A successful response
 *       '404':
 *         description: Story does not exist
 */
//user create account endpoint end

//User create account enpoint
/**
 * @swagger
 * /api/v1/story/republish:
 *   post:
 *     tags:
 *       - Republish a story
 *     description: republish a story
 *     parameters:
 *       - name: reqBody
 *         description: request body
 *         in: body
 *         schema:
 *           type: object
 *           properties:
 *             storyId:
 *               type: string
 *
 *           required:
 *             - storyId
 *     responses:
 *       '200':
 *         description: A successful response
 *       '404':
 *         description: Story does not exist
 */
//user create account endpoint end

//User create account enpoint
/**
 * @swagger
 * /api/v1/story/update/popularity:
 *   put:
 *     tags:
 *       - Update story popularity
 *     description: update a published story's popularity
 *     parameters:
 *       - name: reqBody
 *         description: request body
 *         in: body
 *         schema:
 *           type: object
 *           properties:
 *             storyId:
 *               type: string
 *
 *           required:
 *             - storyId
 *     responses:
 *       '200':
 *         description: A successful response
 *       '404':
 *         description: Story does not exist
 */
//user create account endpoint end

/**
 * @swagger
 * /api/v1/story/popular:
 *   get:
 *     tags:
 *       - Get most trending stories
 *     description: get stories with most views
 *     responses:
 *       '200':
 *         description: A successful response
 *       '500':
 *         description: An unsuccessfull response
 */

// Get All Categories endpoint documentation end here

/**
 * @swagger
 * /api/v1/story/single/popular:
 *   get:
 *     tags:
 *       - Get one most trending story
 *     description: get stories with most views
 *     responses:
 *       '200':
 *         description: A successful response
 *       '500':
 *         description: An unsuccessfull response
 */

// Get All Categories endpoint documentation end here

//User create account enpoint
/**
 * @swagger
 * /api/v1/story/update/popularity:
 *   put:
 *     tags:
 *       - Update story popularity
 *     description: update a published story's popularity
 *     parameters:
 *       - name: reqBody
 *         description: request body
 *         in: body
 *         schema:
 *           type: object
 *           properties:
 *             storyId:
 *               type: string
 *
 *           required:
 *             - storyId
 *     responses:
 *       '200':
 *         description: A successful response
 *       '404':
 *         description: Story does not exist
 */
//user create account endpoint end

//User create account enpoint
/**
 * @swagger
 * /api/v1/story/update:
 *   put:
 *     tags:
 *       - Update story
 *     description: update a published story
 *     parameters:
 *       - name: reqBody
 *         description: request body
 *         in: body
 *         schema:
 *           type: object
 *           properties:
 *             storyId:
 *               type: string
 *             updateInfo:
 *               type: object
 *
 *           required:
 *             - storyId
 *             - updateInfo
 *     responses:
 *       '200':
 *         description: A successful response
 *       '404':
 *         description: Story does not exist
 */
//user create account endpoint end
