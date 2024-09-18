import { Router } from "express";
import {
  GetAllUsers,
  GetUseById,
  GetUserByUsername,
} from "../controllers/user.controller.js";

import authenticateToken from "../middleware/AutenticateToken.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Operaciones de Users
 */

/**
 * @swagger
 * /api/v1/users:
 *   get:
 *     summary: Obtiene la lista de todos los Usuarios
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: La lista de Usuarios.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get("/users", authenticateToken, GetAllUsers); // Bloquear ruta

/**
 * @swagger
 * /api/v1/users/id/{id}:
 *   get:
 *     summary: Obtiene un Usuario por Id
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: El ID del usuario
 *     responses:
 *       200:
 *         description: Información del Usuario por Id.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.get("/users/id/:id", authenticateToken, GetUseById); // Bloquear ruta

/**
 * @swagger
 * /api/v1/users/name/{name}:
 *   get:
 *     summary: Obtiene la lista de todos los Usuarios por name
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: El name del Usuario
 *     responses:
 *       200:
 *         description: La lista de Usuarios por name.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get("/users/name/:name", authenticateToken, GetUserByUsername); // Bloquear ruta

export default router;
