import { NextRequest } from 'next/server';
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
      const result = await this.authService.login(body.email, body.password);
      return this.ok(result);
    } catch (error: any) {
      return this.fail(error.message, 401);
    }
  }
}
