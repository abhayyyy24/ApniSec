import { NextRequest } from 'next/server';
import { BaseHandler } from './BaseHandler';
import { IssueService } from '../services/IssueService';
import { AuthMiddleware } from '../middlewares/AuthMiddleware';
import { RateLimitMiddleware } from '../middlewares/RateLimitMiddleware';

export class IssueByIdHandler extends BaseHandler {
  private service: IssueService;
  
  constructor() {
    super();
    this.service = new IssueService();
  }

  async handle(
    req: NextRequest,
    ctx: { params: Promise<{ id: string }> }
  ) {
    const rate = RateLimitMiddleware.check(req);
    if (rate) return rate;

    try {
      const userId = await AuthMiddleware.authenticate();

      const { id: issueId } = await ctx.params;

      if (req.method === 'GET') {
        return this.ok(await this.service.getIssue(userId, issueId));
      }

      if (req.method === 'PUT') {
        const body = await req.json();
        return this.ok(await this.service.updateIssue(userId, issueId, body));
      }

      if (req.method === 'DELETE') {
        await this.service.deleteIssue(userId, issueId);
        return this.ok({ deleted: true });
      }

      return this.fail('Method not allowed', 405);
    } catch (e: any) {
      return this.fail(e.message, 400);
    }
  }
}
