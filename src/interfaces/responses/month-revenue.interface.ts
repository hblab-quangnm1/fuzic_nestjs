// /**
//  * Project: ada2b0612041fa27393aa211eafe379cded4a02a3c34ca43955869e65685dd29
//  *
//  * @swagger
//  * components:
//  *   schemas:
//  *     MonthRevenue:
//  *       type: object
//  *       properties:
//  *         id:
//  *           type: string
//  *         amount:
//  *           type: number
//  *         month:
//  *           type: integer
//  *         year:
//  *           type: integer
//  *         scheduledTransferDate:
//  *           type: string
//  *           format: date-time
//  *         paid:
//  *           type: boolean
//  *         revenueType:
//  *           type: string
//  *           enum: [actual, estimated]
//  *         userId:
//  *           type: string
//  */

// import { RevenueType } from "@root/enums/revenue-type.enum";

// export interface MonthRevenue {
//     id: string;
//     amount: number;
//     month: number;
//     year: number;
//     scheduledTransferDate: Date;
//     paid: boolean;
//     revenueType: RevenueType;
//     userId: string;
// }
