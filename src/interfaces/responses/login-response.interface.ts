/**
 * Project: ada2b0612041fa27393aa211eafe379cded4a02a3c34ca43955869e65685dd29
 * @swagger
 * components:
 *   schemas:
 *     LoginResponse:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: User id
 *         accessToken:
 *           type: string
 *           description: Access token for authentication
 *         roleName:
 *           type: string
 *           description: Role name of current user
 *         realName:
 *           type: string
 *           description: Real name of current user
 *         stageName:
 *           type: string
 *           description: Stage name of current user
 *         systemAvatarName:
 *           type: string
 *           description: User avatar filename on the system
 */

export interface LoginResponse {
  id: string;
  accessToken: string;
  roleName: string;
  realName: string;
  stageName: string;
  systemAvatarName: string;
}
