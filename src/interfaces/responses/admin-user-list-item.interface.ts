/**
 * Project: ada2b0612041fa27393aa211eafe379cded4a02a3c34ca43955869e65685dd29
 *
 * @swagger
 * components:
 *   schemas:
 *     AdminUserListItem:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         stageName:
 *           type: string
 *         realName:
 *           type: string
 *         systemAvatarName:
 *           type: string
 *         estimatedTotalRevenue:
 *           type: number
 *         actualTotalRevenue:
 *           type: number
 *         fullyPaid:
 *           type: boolean
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 */

export interface AdminUserListItem {
  id: string;
  stageName: string;
  realName: string;
  systemAvatarName: string;
  estimatedTotalRevenue: number;
  actualTotalRevenue: number;
  fullyPaid: boolean;
  createdAt: Date;
  updatedAt: Date;
}
