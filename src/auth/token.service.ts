import { Injectable } from '@nestjs/common';
import jwt from 'jsonwebtoken';
import { GENERAL_CONFIG } from '@root/configs/general.config';
import { User } from '@root/users/users.entity';

const { JWT_SECRET, JWT_EXPIRED_TIME, VERIFY_CREATOR_EMAIL_EXPIRED_TIME } = GENERAL_CONFIG;

@Injectable()
export class TokenService {
  generateAccessToken(user: User) {
    const { id, email, role, completeProfile } = user;
    const payload = { id, email, roleName: role.role, completeProfile };
    const options = { expiresIn: JWT_EXPIRED_TIME };
    const token = jwt.sign(payload, JWT_SECRET, options);
    return token;
  }

  generateVerifyToken(id: string, role: string, email: string, language: string = 'ja') {
    const payload = { id, role, email, language };
    const options = { expiresIn: VERIFY_CREATOR_EMAIL_EXPIRED_TIME };
    const token = jwt.sign(payload, JWT_SECRET, options);
    return token;
  }
}
