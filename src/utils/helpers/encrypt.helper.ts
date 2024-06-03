// Project: ada2b0612041fa27393aa211eafe379cded4a02a3c34ca43955869e65685dd29

import { GENERAL_CONFIG } from '@root/configs/general.config';
import bcrypt from 'bcrypt';
import CryptoJS from 'crypto-js';

const iv = CryptoJS.lib.WordArray.random(16);
export class EncryptHelper {
  static async hashPassword(password: string) {
    return await bcrypt.hash(password, 12);
  }

  static async validatePassword(password: string, encrypted: string) {
    return await bcrypt.compare(password, encrypted);
  }

  static encryptToken(token: string) {
    const ciphertext = CryptoJS.AES.encrypt(token, GENERAL_CONFIG.CRYPTO_KEY, { iv }).toString();
    return ciphertext;
  }

  static decryptToken(encryptedToken: string) {
    const bytes = CryptoJS.AES.decrypt(encryptedToken, GENERAL_CONFIG.CRYPTO_KEY, { iv });
    const decryptedToken = bytes.toString(CryptoJS.enc.Utf8);
    return decryptedToken;
  }
}
