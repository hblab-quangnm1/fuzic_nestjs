/**
 * Project: ada2b0612041fa27393aa211eafe379cded4a02a3c34ca43955869e65685dd29
 * @swagger
 * components:
 *   schemas:
 *     ForgotPasswordRequest:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *         redirectUrl:
 *           type: string
 *       required:
 *         - email
 *         - redirectUrl
 */

export interface ForgotPasswordRequest {
  email: string;
  redirectUrl: string;
}
