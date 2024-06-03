/**
 * Project: ada2b0612041fa27393aa211eafe379cded4a02a3c34ca43955869e65685dd29
 * @swagger
 * components:
 *   schemas:
 *     GetRegisteredSongListByArtistIdRequest:
 *       type: object
 *       properties:
 *         artistId:
 *           type: string
 *         page:
 *           type: number
 *         createdAt:
 *           size: number
 */

import { SortDirection } from '@root/utils/constants';

export interface GetRegisteredSongListByArtistIdRequest {
  artistId: string;
  page: number;
  size: number;
  sortColumn?: string;
  sortDirection?: SortDirection;
}
