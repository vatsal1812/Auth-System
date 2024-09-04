const express = require('express');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

/**
 * @swagger
 * /api/user/me:
 *   get:
 *     summary: Get the current user's profile
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User profile retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 email:
 *                   type: string
 *       401:
 *         description: Unauthorized (invalid or missing token)
 */

router.get('/me', authMiddleware, (req, res) => {
  res.status(200).json(req.user);
});

module.exports = router;
