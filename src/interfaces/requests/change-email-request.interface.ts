/**
 * Project: ada2b0612041fa27393aa211eafe379cded4a02a3c34ca43955869e65685dd29
 * @swagger
 * components:
 *   schemas:
 *     ChangeEmailRequest:
 *       type: object
 *       properties:
 *         oldEmail:
 *           type: string
 *         newEmail:
 *           type: string
 *         confirmEmail:
 *           type: string
 *         redirectUrl:
 *           type: string
 *       required:
 *         - oldEmail
 *         - newEmail
 *         - confirmEmail
 *         - redirectUrl
 */

export interface ChangeEmailRequest {
  oldEmail: string;
  newEmail: string;
  confirmEmail: string;
  redirectUrl: string;
}
