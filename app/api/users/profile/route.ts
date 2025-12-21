import { NextRequest } from 'next/server';
import { ProfileHandler } from '@/backend/handlers/ProfileHandler';

const handler = new ProfileHandler();

export async function GET(req: NextRequest) {
  return handler.handle(req);
}

export async function PUT(req: NextRequest) {
  return handler.handle(req);
}
