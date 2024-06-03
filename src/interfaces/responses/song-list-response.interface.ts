/**
 * Project: ada2b0612041fa27393aa211eafe379cded4a02a3c34ca43955869e65685dd29
 * 
 * @swagger
 * components:
 *   schemas:
 *     SongListResponse:
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
 *            $ref: '#/components/schemas/SongResponse'
 */

import { SongResponse } from "./song-response.interface";

export interface SongListResponse {
	currentPage: number;
	total: number;
	data: SongResponse[];
}
