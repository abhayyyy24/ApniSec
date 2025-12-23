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
    const rateLimitResponse = RateLimitMiddleware.check(req);
    if (rateLimitResponse) return rateLimitResponse;

    try {
      const body = await req.json();

      // 1️⃣ Authenticate user
      const token = await this.authService.login(
        body.email,
        body.password
      );

      // 2️⃣ SET COOKIE HERE (CRITICAL FIX)
      const cookieStore = await cookies();
      cookieStore.set('access_token', token, {
        httpOnly: true,
        path: '/', // 🚨 THIS fixes your redirect issue
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7,
      });

      // 3️⃣ Return success response
      return this.ok({ success: true });
    } catch (error: any) {
      return this.fail(error.message, 401);
    }
  }
}
