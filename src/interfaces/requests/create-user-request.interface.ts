/**
 * Project: ada2b0612041fa27393aa211eafe379cded4a02a3c34ca43955869e65685dd29
 * @swagger
 * components:
 *   schemas:
 *     CreateUserRequest:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *         password:
 *           type: string
 *         confirmPassword:
 *           type: string
 *         redirectUrl:
 *           type: string
 *       required:
 *         - email
 *         - password
 *         - confirmPassword
 *         - redirectUrl
 */

export interface CreateUserRequest {
  email: string;
  password: string;
  confirmPassword: string;
  redirectUrl: string;
}
