/**
 * Project: ada2b0612041fa27393aa211eafe379cded4a02a3c34ca43955869e65685dd29
 * @swagger
 * components:
 *   schemas:
 *     GetChannelRequest:
 *       type: object
 *       required:
 *         - authorizationCode
 *       properties:
 *         authorizationCode:
 *           type: string
 *           description: Google authorization code
 */

export interface GetChannelRequest {
  authorizationCode: string;
}
