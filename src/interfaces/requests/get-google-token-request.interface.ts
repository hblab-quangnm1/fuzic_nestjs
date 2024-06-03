/**
 * Project: ada2b0612041fa27393aa211eafe379cded4a02a3c34ca43955869e65685dd29
 * @swagger
 * components:
 *   schemas:
 *     GetGoogleTokenRequest:
 *       type: object
 *       required:
 *         - authorizationCode
 *         - redirectUri
 *       properties:
 *         authorizationCode:
 *           type: string
 *           description: Authorization code
 *         redirectUri:
 *           type: string
 *           description: Redirect URI
 */

export interface GetGoogleTokenRequest {
  authorizationCode: string;
  redirectUri: string;
}
