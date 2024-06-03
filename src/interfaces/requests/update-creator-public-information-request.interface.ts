/**
 * Project: ada2b0612041fa27393aa211eafe379cded4a02a3c34ca43955869e65685dd29
 *
 * @swagger
 * components:
 *   schemas:
 *     UpdateCreatorPublicInformationRequest:
 *       type: object
 *       required:
 *         - stageName
 *       properties:
 *         stageName:
 *           type: string
 *         bio:
 *           type: string
 *         youtubeChannel:
 *           type: string
 *         avatar:
 *           type: string
 *           format: binary
 *           description: Creator Avatar
 */

export interface UpdateCreatorPublicInformationRequest {
  stageName: string;
  bio?: string;
  youtubeChannel?: string;
}
