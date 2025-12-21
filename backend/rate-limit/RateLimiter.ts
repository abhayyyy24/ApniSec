import { NextRequest, NextResponse } from 'next/server';
import { RateLimitStore } from './RateLimitStore';
import { RateLimitConfig } from './RateLimitConfig';

export class RateLimiter {
  private store: RateLimitStore;
  private config: RateLimitConfig;

  constructor(config: RateLimitConfig) {
    this.store = new RateLimitStore();
    this.config = config;
  }

  handle(req: NextRequest): NextResponse | null {
    const forwardedFor = req.headers.get('x-forwarded-for');
    const identifier = forwardedFor
         ? forwardedFor.split(',')[0].trim()
         : 'unknown';

    const now = Date.now();
    const entry = this.store.get(identifier);

    if (!entry) {
      this.store.set(identifier, {
        count: 1,
        resetAt: now + this.config.windowMs,
      });
      return null;
    }

    if (entry.count >= this.config.limit) {
      return NextResponse.json(
        {
          success: false,
          error: 'Rate limit exceeded',
        },
        {
          status: 429,
          headers: {
            'X-RateLimit-Limit': this.config.limit.toString(),
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': entry.resetAt.toString(),
          },
        }
      );
    }

    entry.count += 1;
    this.store.set(identifier, entry);

    return null;
  }

  addHeaders(res: NextResponse, remaining: number, resetAt: number): void {
    res.headers.set('X-RateLimit-Limit', this.config.limit.toString());
    res.headers.set('X-RateLimit-Remaining', remaining.toString());
    res.headers.set('X-RateLimit-Reset', resetAt.toString());
  }
}
