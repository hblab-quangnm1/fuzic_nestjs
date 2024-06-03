/**
 * Project: ada2b0612041fa27393aa211eafe379cded4a02a3c34ca43955869e65685dd29
 *
 * @swagger
 * components:
 *   schemas:
 *     UpdateArtistPublicInfoRequest:
 *       type: object
 *       required:
 *         - stageName
 *       properties:
 *         stageName:
 *           type: string
 *         bio:
 *           type: string
 *         avatar:
 *           type: string
 *           format: binary
 *           description: Creator Avatar
 */

export interface UpdateArtistPublicInfoRequest {
  stageName: string;
  bio?: string;
}
