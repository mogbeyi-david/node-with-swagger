const express = require('express');

const router = express.Router();

/**
 * @swagger
 * /api/users:
 *    get:
 *      description: This should return all users
 *      responses:
 *        200:
 *          description: A list of users
 *          schema:
 *            type: string
 *        400:
 *          description: Failed Request
 *          schema:
 *            type: string
 */
router.get('', (req, res) => {
  res.status(200).send({
    message: 'This should return all users'
  })
});


/**
 * @swagger
 * /api/users:
 *    post:
 *      summary: A sample survey.
 *      consumes:
 *        - application/json
 *      description: This should create a new user
 *      parameters:
 *        - in: body
 *          name: name
 *          description: The user to create.
 *      schema:
 *        type: object
 *        required:
 *          - name
 *        properties:
 *          name:
 *            type: string
 *      responses:
 *        200:
 *          description: User created successfully
 *          schema:
 *            type: string
 *        400:
 *          description: Could not create a user
 *          schema:
 *            type: string
 */
router.post('', (req, res) => {
  const name = req.body.name;
  if (!name) return res.status(400).send({message: 'User name is required', data: null});
  res.status(200).send({
    message: 'User created successfully',
    data: name
  });
});
module.exports = router;