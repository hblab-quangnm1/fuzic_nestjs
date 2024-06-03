// /**
//  * Project: ada2b0612041fa27393aa211eafe379cded4a02a3c34ca43955869e65685dd29
//  * @swagger
//  * components:
//  *   schemas:
//  *     ArtistResponse:
//  *       type: object
//  *       properties:
//  *         id:
//  *          type: string
//  *         email:
//  *          type: string
//  *         completeProfile:
//  *          type: boolean
//  *         address:
//  *          type: object
//  *          properties:
//  *           id:
//  *            type: string
//  *           prefectures:
//  *            type: string
//  *           postalCode:
//  *            type: string
//  *           address:
//  *            type: string
//  *           userId:
//  *            type: string
//  *         basicInformation:
//  *          type: object
//  *          properties:
//  *           dob:
//  *            type: string
//  *            format: date-time
//  *         publicUserInformation:
//  *          type: object
//  *          properties:
//  *           realName:
//  *            type: string
//  *           stageName:
//  *            type: string
//  *           bio:
//  *            type: string
//  *           phone:
//  *            type: string
//  *         transferInformation:
//  *          type: object
//  *          properties:
//  *           id:
//  *            type: string
//  *           bankCode:
//  *            type: string
//  *           branchCode:
//  *            type: string
//  *           accountType:
//  *            type: string
//  *           accountHolder:
//  *            type: string
//  *           accountNumber:
//  *            type: string
//  *           userId:
//  *            type: string
//  *         createdAt:
//  *          type: string
//  *          format: date-time
//  *         updatedAt:
//  *          type: string
//  *          format: date-time
//  *         estimatedMonthRevenue:
//  *          type: number
//  *         systemAvatarName:
//  *          type: string
//  */

// import { Address } from '@root/entity/address.entity';
// import { BankAccount } from '@root/entity/bank-account.entity';

// export interface ArtistResponse {
//   id: string;
//   email: string;
//   publicUserInformation: {
//     realName: string;
//     stageName: string;
//     bio: string;
//     phone: string;
//   };
//   basicInformation: {
//     dob: string;
//   };
//   address: Address;
//   transferInformation: BankAccount;
//   createdAt: Date;
//   updatedAt: Date;
//   estimatedMonthRevenue: number;
//   systemAvatarName: string;
// }
