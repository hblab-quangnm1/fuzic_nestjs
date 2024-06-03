/**
 * Project: ada2b0612041fa27393aa211eafe379cded4a02a3c34ca43955869e65685dd29
 *
 * @swagger
 * components:
 *   schemas:
 *     AddressResponse:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         prefectures:
 *           type: string
 *         postalCode:
 *           type: string
 *         address:
 *           type: string
 */

export interface AddressResponse {
  id: string;
  prefectures: string;
  postalCode: string;
  address: string;
}
