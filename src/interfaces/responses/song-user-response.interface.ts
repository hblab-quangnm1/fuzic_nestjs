/**
 * Project: ada2b0612041fa27393aa211eafe379cded4a02a3c34ca43955869e65685dd29
 * 
 * @swagger
 * components:
 *   schemas:
 *     SongUserResponse:
 *       type: object
 *       properties:
 *         id:
 *          type: string
 *         stageName:
 *          type: string
 *         systemAvatarName:
 *          type: string
 *         profitRate:
 *          type: number
 *         estimatedRevenue:
 *          type: number
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *         requestedAt:
 *           type: string
 *           format: date-time
 */

export interface SongUserResponse {
  id: string;
  stageName: string;
  systemAvatarName: string;
  profitRate: number;
  estimatedRevenue: number;
  createdAt: Date;
  updatedAt: Date;
  requestedAt: Date;
}
