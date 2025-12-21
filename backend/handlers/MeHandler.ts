import { NextRequest } from 'next/server';
import { BaseHandler } from './BaseHandler';
import { AuthService } from '../services/AuthService';
import { AuthMiddleware } from '../middlewares/AuthMiddleware';

export class MeHandler extends BaseHandler {
  private authService: AuthService;

  constructor() {
    super();
    this.authService = new AuthService();
  }

  async handle(req: NextRequest) {
    try {
      const userId = AuthMiddleware.authenticate(req);
      const user = await this.authService.getCurrentUser(userId);
      return this.ok(user);
    } catch (error: any) {
      return this.fail(error.message, 401);
    }
  }
}
