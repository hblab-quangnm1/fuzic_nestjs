/**
 * Project: ada2b0612041fa27393aa211eafe379cded4a02a3c34ca43955869e65685dd29
 * @swagger
 * components:
 *   schemas:
 *     UpdateCreatorPrivateInformationResponse:
 *       type: object
 *       required:
 *         - creatorId
 *         - success
 *       properties:
 *         creatorId:
 *           type: string
 *         success:
 *           type: boolean
 */

export interface UpdateCreatorPrivateInformationResponse {
	creatorId: string;
	success: boolean;
}
