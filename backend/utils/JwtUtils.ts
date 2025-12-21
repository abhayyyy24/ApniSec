import * as jwt from 'jsonwebtoken';
import type { JwtPayload, SignOptions } from 'jsonwebtoken';

export class JwtUtil {
  private static readonly secret = process.env.JWT_SECRET as jwt.Secret;

  private static readonly signOptions: SignOptions = {
    expiresIn: process.env.JWT_EXPIRES_IN as SignOptions['expiresIn'],
  };

  static sign(payload: object): string {
    return jwt.sign(payload, this.secret, this.signOptions);
  }

  static verify(token: string): JwtPayload {
    return jwt.verify(token, this.secret) as JwtPayload;
  }
}
