import { NextRequest } from 'next/server';
import { ProfileHandler } from '@/backend/handlers/ProfileHandler';
export const runtime = 'nodejs';
const handler = new ProfileHandler();

export async function GET(req: NextRequest) {
  return handler.handle(req);
}

export async function PATCH(req: NextRequest) {
  return handler.handle(req);
}
