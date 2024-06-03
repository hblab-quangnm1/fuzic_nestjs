/**
 * Project: ada2b0612041fa27393aa211eafe379cded4a02a3c34ca43955869e65685dd29
 * @swagger
 * components:
 *   schemas:
 *     GetSongListPaginationRequest:
 *       type: object
 *       properties:
 *         page:
 *           type: number
 *         size:
 *           type: number
 */

import { SortDirection } from '@root/utils/constants';

export interface GetSongListPaginationRequest {
  page: number;
  size: number;
  sortColumn?: string;
  sortDirection?: SortDirection;
}
