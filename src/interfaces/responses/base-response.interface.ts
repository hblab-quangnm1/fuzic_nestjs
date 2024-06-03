/**
 * Project: ada2b0612041fa27393aa211eafe379cded4a02a3c34ca43955869e65685dd29
 * @swagger
 * components:
 *   schemas:
 *     BaseResponse:
 *       type: object
 *       properties:
 *         result:
*            type: object
 *         message:
 *           type: string
 *         errorCode:
 *           type: string
 *         replacingValue:
 *           type: object
 */

import { Slots } from "@root/utils/helpers";

export interface BaseResponse<T = null> {
    result?: T;
    message?: string;
    errorCode?: string;
    replacingValue?: Slots;
}