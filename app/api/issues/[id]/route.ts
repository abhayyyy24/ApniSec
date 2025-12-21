import { NextRequest } from 'next/server';
import { IssueByIdHandler } from '@/backend/handlers/IssueByIdHandler';

const handler = new IssueByIdHandler();

export async function GET(req: NextRequest, ctx: any) {
  return handler.handle(req, ctx);
}

export async function PUT(req: NextRequest, ctx: any) {
  return handler.handle(req, ctx);
}

export async function DELETE(req: NextRequest, ctx: any) {
  return handler.handle(req, ctx);
}
