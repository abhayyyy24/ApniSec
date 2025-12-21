import { NextRequest } from 'next/server';
import { BaseHandler } from './BaseHandler';
import { ProfileService } from '../services/ProfileService';
import { AuthMiddleware } from '../middlewares/AuthMiddleware';
import { RateLimitMiddleware } from '../middlewares/RateLimitMiddleware';

export class ProfileHandler extends BaseHandler {
  private profileService: ProfileService;

  constructor() {
    super();
    this.profileService = new ProfileService();
  }

  async handle(req: NextRequest) {
    const rate = RateLimitMiddleware.check(req);
    if (rate) return rate;

    try {
      const userId = AuthMiddleware.authenticate(req);

      if (req.method === 'GET') {
        const profile = await this.profileService.getProfile(userId);
        return this.ok(profile);
      }

      if (req.method === 'PUT') {
        const body = await req.json();
        const updated = await this.profileService.updateProfile(userId, body);
        return this.ok({
          email: updated.email,
          firstName: updated.firstName,
          lastName: updated.lastName,
        });
      }

      return this.fail('Method not allowed', 405);
    } catch (error: any) {
      return this.fail(error.message, 400);
    }
  }
}
