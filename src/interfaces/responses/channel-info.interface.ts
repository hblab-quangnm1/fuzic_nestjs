/**
 * Project: ada2b0612041fa27393aa211eafe379cded4a02a3c34ca43955869e65685dd29
 * 
 * @swagger
 * components:
 *   schemas:
 *     ChannelInfo:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         title:
 *           type: string
 *         description:
 *           type: string
 *         customUrl:
 *           type: string
 *         thumbnailUrl:
 *           type: string
 *         viewCount:
 *           type: integer
 *         subscriberCount:
 *           type: integer
 *         videoCount:
 *           type: integer
 */


export interface ChannelInfo {
    id: string;
    title: string;
    description: string;
    customUrl: string;
    thumbnailUrl: string;
    viewCount: number;
    subscriberCount: number;
    videoCount: number;
}