/**
 * Project: ada2b0612041fa27393aa211eafe379cded4a02a3c34ca43955869e65685dd29
 *
 * @swagger
 * components:
 *   schemas:
 *     UseSongRequest:
 *       type: object
 *       required:
 *         - bio
 *         - youtubeChannelId
 *         - realName
 *         - dob
 *         - phone
 *         - postalCode
 *         - prefectures
 *         - address
 *         - bankCode
 *         - branchCode
 *         - accountType
 *         - accountHolder
 *         - accountNumber
 *         - songId
 *       properties:
 *         bio:
 *           type: string
 *           description: User's biography
 *         youtubeChannelId:
 *           type: string
 *           description: YouTube channel id
 *         realName:
 *           type: string
 *           description: User's real name
 *         dob:
 *           type: string
 *           format: date-time
 *         phone:
 *           type: string
 *           description: User's phone number
 *         postalCode:
 *           type: string
 *           description: User's postal code
 *         prefectures:
 *           type: string
 *           description: User's prefectures
 *         address:
 *           type: string
 *           description: User's address
 *         bankCode:
 *           type: string
 *           description: Bank code
 *         branchCode:
 *           type: string
 *           description: Branch code
 *         accountType:
 *           type: string
 *           description: Type of bank account
 *         accountHolder:
 *           type: string
 *           description: Account holder's name
 *         accountNumber:
 *           type: string
 *           description: Bank account number
 *         songId:
 *           type: string
 *           description: ID of the song to be used
 *         updateMyPage:
 *           type: boolean
 *           description: Update my page or not
 */

export interface UseSongRequest {
  bio: string;
  youtubeChannelId: string;
  realName: string;
  dob: string;
  phone: string;
  postalCode: string;
  prefectures: string;
  address: string;
  bankCode: string;
  branchCode: string;
  accountType: string;
  accountHolder: string;
  accountNumber: string;
  songId: string;
  updateMyPage: boolean;
}
