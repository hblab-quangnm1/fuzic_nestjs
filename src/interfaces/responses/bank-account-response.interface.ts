/**
 * Project: ada2b0612041fa27393aa211eafe379cded4a02a3c34ca43955869e65685dd29
 * 
 * @swagger
 * components:
 *   schemas:
 *     BankAccountResponse:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         accountHolder:
 *           type: string
 *         accountType:
 *           type: string
 *         accountNumber:
 *           type: string
 *         bankCode:
 *           type: string
 *         branchCode:
 *           type: string
 */

export interface BankAccountResponse {
    id: string;
    accountHolder: string;
    accountType: string;
    accountNumber: string;
    bankCode: string;
    branchCode: string;
}