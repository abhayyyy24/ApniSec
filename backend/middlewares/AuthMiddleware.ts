import { cookies } from 'next/headers';
import { JwtUtil } from '../utils/JwtUtils';

export class AuthMiddleware {
  static async authenticate(): Promise<string> {
    const cookieStore = await cookies();
    const token = cookieStore.get('access_token')?.value;

    if (!token) {
      throw new Error('Unauthorized');
    }

    const payload = JwtUtil.verify(token);
    return payload.userId as string;
  }
}
