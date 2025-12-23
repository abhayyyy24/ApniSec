import { NextRequest, NextResponse } from 'next/server';
import { RateLimiter } from '../rate-limit/RateLimiter';

const limiter = new RateLimiter({
  limit: 100,
  windowMs: 15 * 60 * 1000, // 15 minutes
});

export class RateLimitMiddleware {
  static check(req: NextRequest): NextResponse | null {
    //  diabled limit in dev
    if (process.env.NODE_ENV === 'development') {
      return null;
    }

    //limit write operations
    if (!['POST', 'PATCH', 'DELETE'].includes(req.method)) {
      return null;
    }

    const response = limiter.handle(req);

    //error
    if (response) {
      return NextResponse.json(
        {
          success: false,
          error: 'Too many requests. Please slow down.',
        },
        { status: 429 }
      );
    }

    return null;
  }
}
