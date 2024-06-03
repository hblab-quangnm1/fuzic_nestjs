/**
 * Project: ada2b0612041fa27393aa211eafe379cded4a02a3c34ca43955869e65685dd29
 * @swagger
 * components:
 *   schemas:
 *     ChangePasswordRequest:
 *       type: object
 *       properties:
 *         oldPassword:
 *           type: string
 *         newPassword:
 *           type: string
 *         confirmPassword:
 *           type: string
 *       required:
 *         - oldPassword
 *         - password
 *         - confirmPassword
 */

export interface ChangePasswordRequest {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}
