import { NextRequest } from 'next/server';
import { MeHandler } from '@/backend/handlers/MeHandler';
export const runtime = 'nodejs';
const handler = new MeHandler();

export async function GET(req: NextRequest) {
  return handler.handle(req);
}
