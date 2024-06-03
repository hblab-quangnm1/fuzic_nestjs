/**
 * Project: ada2b0612041fa27393aa211eafe379cded4a02a3c34ca43955869e65685dd29
 * @swagger
 * components:
 *   schemas:
 *     ResetPasswordRequest:
 *       type: object
 *       properties:
 *         newPassword:
 *           type: string
 *         confirmPassword:
 *           type: string
 *         token:
 *           type: string
 *       required:
 *         - password
 *         - confirmPassword
 *         - token
 */

export interface ResetPasswordRequest {
  newPassword: string;
  confirmPassword: string;
  token: string;
}
