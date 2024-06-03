/**
 * Project: ada2b0612041fa27393aa211eafe379cded4a02a3c34ca43955869e65685dd29
 * @swagger
 * components:
 *   schemas:
 *     UpdateCreatorPrivateInformationRequest:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           required: true
 *         phoneNumber:
 *           type: string
 *           required: true
 *         dob:
 *           type: string
 *           format: date-time
 *           required: true
 *         postCode:
 *           type: string
 *           required: true
 *         prefectures:
 *           type: string
 *           required: true
 *         address:
 *           type: string
 *           required: true
 *         bankCode:
 *           type: string
 *           required: true
 *         accountType:
 *           type: string
 *           required: true
 *         accountHolder:
 *           type: string
 *           required: true
 *         accountNumber:
 *           type: string
 *           required: true
 *         branchCode:
 *           type: string
 *           required: true
 */

export interface UpdateCreatorPrivateInformationRequest {
	name: string;
	phoneNumber: string;
	dob: string;
	postCode: string;
	prefectures: string;
	address: string;
	bankCode: string;
	accountType: string;
	accountHolder: string;
	accountNumber: string;
	branchCode: string;
}
