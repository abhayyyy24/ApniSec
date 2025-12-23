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
      
      const userId = await AuthMiddleware.authenticate();

      if (req.method === 'GET') {
        const profile = await this.profileService.getProfile(userId);
        return this.ok(profile);
      }

      if (req.method === 'PUT') {
        const body = await req.json();
        const updated = await this.profileService.updateProfile(userId, body);
        return this.ok(updated);
      }

      return this.fail('Method not allowed', 405);
    } catch (e: any) {
      return this.fail(e.message, 400);
    }
  }
}
