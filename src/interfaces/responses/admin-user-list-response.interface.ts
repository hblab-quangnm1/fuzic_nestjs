/**
 * Project: ada2b0612041fa27393aa211eafe379cded4a02a3c34ca43955869e65685dd29
 *
 * @swagger
 * components:
 *   schemas:
 *     AdminUserListResponse:
 *       type: object
 *       properties:
 *         currentPage:
 *          type: number
 *         total:
 *          type: number
 *          description: number of items without paging
 *         data:
 *          type: array
 *          items:
 *            $ref: '#/components/schemas/AdminUserListItem'
 */

import { AdminUserListItem } from './admin-user-list-item.interface';

export interface AdminUserListResponse {
  currentPage: number;
  total: number;
  data: AdminUserListItem[];
}
