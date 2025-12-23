import { NextRequest } from 'next/server';
import { LoginHandler } from '@/backend/handlers/LoginHandler';
export const runtime = 'nodejs';
const handler = new LoginHandler();

export async function POST(req: NextRequest) {
  return handler.handle(req);
}
