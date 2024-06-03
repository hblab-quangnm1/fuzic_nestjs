/**
 * Project: ada2b0612041fa27393aa211eafe379cded4a02a3c34ca43955869e65685dd29
 * @swagger
 * components:
 *   schemas:
 *     SongResponse:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: Song id
 *         domesticTitle:
 *           type: string
 *           description: Domestic title of the song
 *         kanaTitle:
 *           type: string
 *           description: Kana title of the song
 *         overseasTitle:
 *           type: string
 *           description: Overseas title of the song
 *         description:
 *           type: string
 *           description: Description of the song
 *         systemThumbnailName:
 *           type: string
 *           description: System thumbnail name
 *         systemSourceName:
 *           type: string
 *           description: System source name
 *         compressedSourceName:
 *           type: string
 *           description: Compressed source name
 *         originalName:
 *           type: string
 *           description: Original name of the song
 *         revenueShareRate:
 *           type: number
 *           description: Revenue share rate
 *         genre:
 *           type: string
 *           description: Genre of the song
 *         duration:
 *           type: number
 *           description: Duration of the song in seconds
 *         bpm:
 *           type: number
 *           description: Beats per minute of the song
 *         language:
 *           type: string
 *           description: Language of the song
 *         explicitContent:
 *           type: boolean
 *           description: Indicates if the song has explicit content
 *         vocalsWithLyrics:
 *           type: boolean
 *           description: Indicates if the song has vocals with lyrics
 *         copyrightManagementType:
 *           type: string
 *           description: Copyright management type
 *         copyrightProvider:
 *           type: string
 *           description: Copyright provider
 *         copyrightProviderCode:
 *           type: string
 *           description: Copyright provider code
 *         lyricist:
 *           type: string
 *           description: Lyricist of the song
 *         composer:
 *           type: string
 *           description: Composer of the song
 *         demonstrator:
 *           type: string
 *           description: Demonstrator of the song
 *         isrcAvailable:
 *           type: boolean
 *           description: Indicates if ISRC code is available for the song
 *         isrcCode:
 *           type: string
 *           description: ISRC code of the song
 *         contentId:
 *           type: string
 *           description: Content id of the song
 *         published:
 *           type: boolean
 *           description: Indicates if the song is published
 *         authorId:
 *           type: string
 *           description: Author id of the song
 *         numberOfUsages:
 *           type: number
 *           description: Number of usages of the song
 *         estimatedTotalRevenue:
 *           type: number
 *           description: Estimated total revenue of the song
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *         usedByThisCreator:
 *           type: boolean
 *           description: Indicate whether the song is used by current creator
 *         author:
 *           $ref: '#/components/schemas/Author'
 */

import { Author } from "./author-response.interface";

export interface SongResponse {
	id: string;
	domesticTitle: string;
	kanaTitle: string;
	overseasTitle: string;
	description: string;
	systemThumbnailName: string;
	systemSourceName: string;
	compressedSourceName: string;
	originalName: string;
	revenueShareRate: number;
	genre: string;
	duration: number;
	bpm: number;
	language: string;
	explicitContent: boolean;
	vocalsWithLyrics: boolean;
	copyrightManagementType: string;
	copyrightProvider: string;
	copyrightProviderCode: string;
	lyricist: string;
	composer: string;
	demonstrator: string;
	isrcAvailable: boolean;
	isrcCode: string;
	contentId: string;
	published: boolean;
	authorId: string;
	numberOfUsages: number;
	estimatedTotalRevenue: number;
	createdAt: Date  
	updatedAt: Date
	usedByThisCreator?: boolean;
	author: Author;
}
