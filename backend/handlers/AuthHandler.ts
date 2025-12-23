import { NextRequest } from 'next/server';
import { BaseHandler } from './BaseHandler';
import { AuthService } from '../services/AuthService';
import { RateLimitMiddleware } from '../middlewares/RateLimitMiddleware';
import { EmailService } from '@/backend/emails/EmailService';

export class AuthHandler extends BaseHandler {
  private authService: AuthService;
  private emailService: EmailService;

  constructor() {
    super();
    this.authService = new AuthService();
    this.emailService = new EmailService();
  }

  async handle(req: NextRequest) {
    const rateLimitResponse = RateLimitMiddleware.check(req);
    if (rateLimitResponse) return rateLimitResponse;

    try {
      const body = await req.json();

      const result = await this.authService.register(body);

      
      await this.emailService.sendWelcomeEmail(
      result.user.email,
      result.user.firstName ?? undefined
);


      
      return this.ok(result, 201);
    } catch (error: any) {
      return this.fail(error.message, 400);
    }
  }
}
