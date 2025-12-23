import { NextRequest } from 'next/server';
import { cookies } from 'next/headers';
import { BaseHandler } from './BaseHandler';
import { AuthService } from '../services/AuthService';
import { RateLimitMiddleware } from '../middlewares/RateLimitMiddleware';

export class LoginHandler extends BaseHandler {
  private authService: AuthService;

  constructor() {
    super();
    this.authService = new AuthService();
  }

  async handle(req: NextRequest) {
    const rate = RateLimitMiddleware.check(req);
    if (rate) return rate;

    try {
      const body = await req.json();
      const { email, password } = body;

      
      const result = await this.authService.login(email, password);

  
      const { token, user } = result;

      
      const cookieStore = await cookies();
      cookieStore.set('access_token', token, {
        httpOnly: true,
        path: '/',
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7, // 7 days
      });

      return this.ok({ user });
    } catch (e: any) {
      return this.fail(e.message, 400);
    }
  }
}
