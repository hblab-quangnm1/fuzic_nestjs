/**
 * Project: ada2b0612041fa27393aa211eafe379cded4a02a3c34ca43955869e65685dd29
 *
 * @swagger
 * components:
 *   schemas:
 *     Author:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: "The unique identifier for the author."
 *         email:
 *           type: string
 *           description: "The email address of the author."
 *         realName:
 *           type: string
 *           description: "The real name of the author."
 *         stageName:
 *           type: string
 *           description: "The stage name of the author."
 *         systemAvatarName:
 *           type: string
 *           description: System avatar filename of the author
 */

export interface Author {
  id: string;
  email: string;
  realName: string;
  stageName: string;
  systemAvatarName: string;
}
