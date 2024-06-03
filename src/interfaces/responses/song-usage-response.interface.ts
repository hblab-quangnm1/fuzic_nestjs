/**
 * Project: ada2b0612041fa27393aa211eafe379cded4a02a3c34ca43955869e65685dd29
 * @swagger
 * components:
 *   schemas:
 *     SongUsageResponse:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: Song usage id
 *         creatorId:
 *           type: string
 *           description: Creator id
 *         songId:
 *           type: string
 *           description: Song id
 *         approved:
 *           type: string
 *           description: allow to use the song or not
 */

export interface SongUsageResponse {
	id: string;
	creatorId: string;
    songId: string;
    approved: boolean;
}
