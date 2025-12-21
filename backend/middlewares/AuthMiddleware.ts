import { NextRequest } from 'next/server';
import { JwtUtil } from '../utils/JwtUtils';

export class AuthMiddleware {
  static authenticate(req: NextRequest): string {
    const authHeader = req.headers.get('authorization');

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new Error('Unauthorized');
    }

    const token = authHeader.split(' ')[1];
    const payload = JwtUtil.verify(token);

    return payload.userId as string;
  }
}
