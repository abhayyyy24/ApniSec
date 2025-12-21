import { NextRequest } from 'next/server';
import { IssueHandler } from '@/backend/handlers/IssueHandler';

const handler = new IssueHandler();

export async function GET(req: NextRequest) {
  return handler.handle(req);
}

export async function POST(req: NextRequest) {
  return handler.handle(req);
}
