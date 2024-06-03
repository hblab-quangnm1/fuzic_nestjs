/**
 * Project: ada2b0612041fa27393aa211eafe379cded4a02a3c34ca43955869e65685dd29
 * 
 * @swagger
 * components:
 *   schemas:
 *     UserPublicInfoResponse:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         stageName:
 *           type: string
 *         bio:
 *           type: string
 *         systemAvatarName:
 *           type: string
 *         youtubeChannel:
 *           type: string
 *         createdAt:
 *          type: string
 *          format: date-time
 *         updatedAt:
 *          type: string
 *          format: date-time
 *         publicUserInformation:   
 *           type: object
 *           properties:
 *             realName:
 *               type: string
 *             stageName:
 *               type: string
 *             bio:
 *               type: string
 *             phone:
 *               type: string
 *             youtube:
 *               type: string
 *         basicInformation:   
 *           type: object
 *           properties:
 *             realName:
 *               type: string
 *             stageName:
 *               type: string
 *             dob:
 *               type: string
 */

export interface UserPublicInfoResponse {
	id: string;
	stageName: string;
	bio: string;
	systemAvatarName: string;
	youtubeChannel?: string;
	createdAt: Date;
	updatedAt: Date;

	// Remove this when FE can update data structure
	publicUserInformation: {
		realName?: string;
		stageName: string;
		bio: string;
		phone?: string;
		youtube?: string;
	};
	basicInformation: {
		realName?: string;
		stageName: string;
		dob?: string;
	};
}