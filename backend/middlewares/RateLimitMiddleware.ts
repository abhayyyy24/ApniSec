import { NextRequest, NextResponse } from 'next/server';
import { RateLimiter } from '../rate-limit/RateLimiter';

const limiter = new RateLimiter({
  limit: 100,
  windowMs: 15 * 60 * 1000, // 15 minutes
});

export class RateLimitMiddleware {
  static check(req: NextRequest): NextResponse | null {
    return limiter.handle(req);
  }
}
