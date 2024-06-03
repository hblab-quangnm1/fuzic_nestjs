/**
 * Project: ada2b0612041fa27393aa211eafe379cded4a02a3c34ca43955869e65685dd29
 * 
 * @swagger
 * components:
 *   schemas:
 *     UserFullInfoResponse:
 *       allOf:
 *         - $ref: '#/components/schemas/UserPublicInfoResponse'
 *         - type: object
 *           properties:
 *             completeProfile:
 *               type: boolean
 *             email:
 *               type: string
 *             realName:
 *               type: string
 *             dob:
 *               type: string
 *               format: date-time
 *             phone:
 *               type: string
 *             address:
 *               $ref: '#/components/schemas/AddressResponse'
 *             bankAccount:
 *               $ref: '#/components/schemas/BankAccountResponse'
 *             estimatedMonthRevenue:
 *               type: number
 */

import { UserPublicInfoResponse } from "./user-public-info-response.interface";
import { AddressResponse } from "./address-response.interface";
import { BankAccountResponse } from "./bank-account-response.interface";

export interface UserFullInfoResponse extends UserPublicInfoResponse {
	completeProfile: boolean;
	email: string;
    realName: string;
	dob: string;
	phone: string;
	address: AddressResponse;
	transferInformation: BankAccountResponse;
	estimatedMonthRevenue?: number;
}
