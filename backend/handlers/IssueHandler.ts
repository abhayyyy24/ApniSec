import { NextRequest } from 'next/server';
import { BaseHandler } from './BaseHandler';
import { IssueService } from '../services/IssueService';
import { AuthMiddleware } from '../middlewares/AuthMiddleware';
import { RateLimitMiddleware } from '../middlewares/RateLimitMiddleware';
import { IssueType } from '@prisma/client';

export class IssueHandler extends BaseHandler {
  private service: IssueService;

  constructor() {
    super();
    this.service = new IssueService();
  }

  async handle(req: NextRequest) {
    const rate = RateLimitMiddleware.check(req);
    if (rate) return rate;

    try {
      // ✅ FIX: await + no req argument
      const userId = await AuthMiddleware.authenticate();

      if (req.method === 'GET') {
        const type = req.nextUrl.searchParams.get('type') as IssueType | null;
        const issues = await this.service.listIssues(
          userId,
          type || undefined
        );
        return this.ok(issues);
      }

      if (req.method === 'POST') {
        const body = await req.json();
        const issue = await this.service.createIssue(userId, body);
        return this.ok(issue, 201);
      }

      return this.fail('Method not allowed', 405);
    } catch (e: any) {
      return this.fail(e.message, 400);
    }
  }
}
