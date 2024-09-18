import { Router } from "express";
import {
    LoginUser,
    RegisterUser
  } from "../controllers/user.controller.js";
const router = Router();

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Operaciones de Autentificacion
 */

/**
 * @swagger
 * /api/v1/users/:
 *   post:
 *     summary: Registrar un Usuario
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: El Nombre del Usuario
 *                 example: Juan Martinez
 *               email:
 *                 type: string
 *                 description: El correo del Usuario, este es único
 *                 example: juan@gmail.com
 *               password:
 *                 type: string
 *                 description: La Contraseña del Usuario
 *                 example: Juan12345
 *             required:
 *               - name
 *               - email
 *               - password
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID del Usuario creado
 *                   example: 1
 *                 name:
 *                   type: string
 *                   description: El Nombre del Usuario
 *                   example: Juan Martinez
 *                 email:
 *                   type: string
 *                   description: El correo del Usuario
 *                   example: juan@gmail.com
 *                 message:
 *                   type: string
 *                   description: Mensaje de éxito
 *                   example: Usuario creado exitosamente
 *       400:
 *         description: Error en la solicitud, datos incorrectos o falta de información.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Descripción del error
 *                   example: Datos del usuario no válidos
 */
router.post("/users", RegisterUser)


/**
 * @swagger
 * /api/v1/users/login:
 *   post:
 *     summary: Inicio de Sesion
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: El correo del Usuario, este es único
 *                 example: juan@gmail.com
 *               password:
 *                 type: string
 *                 description: La Contraseña del Usuario
 *                 example: Juan12345
 *             required:
 *               - email
 *               - password
 *     responses:
 *       201:
 *         description: Usuario logueado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID del Usuario creado
 *                   example: 1
 *                 name:
 *                   type: string
 *                   description: El Nombre del Usuario
 *                   example: Juan Martinez
 *                 email:
 *                   type: string
 *                   description: El correo del Usuario
 *                   example: juan@gmail.com
 *                 message:
 *                   type: string
 *                   description: Mensaje de éxito
 *                   example: Usuario creado exitosamente
 *       400:
 *         description: Error en la solicitud, datos incorrectos o falta de información.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Descripción del error
 *                   example: Datos del usuario no válidos
 */
router.post("/users/login", LoginUser)

export default router
