import { NextRequest } from 'next/server';
import { AuthHandler } from '@/backend/handlers/AuthHandler';

export const runtime = 'nodejs';

const handler = new AuthHandler();

export async function POST(req: NextRequest) {
  return handler.handle(req);
}
