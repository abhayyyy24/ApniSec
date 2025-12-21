import { NextRequest, NextResponse } from 'next/server';
import { ApiResponse } from '../utils/ApiResponse';

export abstract class BaseHandler {
  protected ok<T>(data: T, status = 200): NextResponse<ApiResponse<T>> {
    return NextResponse.json(
      {
        success: true,
        data,
      },
      { status }
    );
  }

  protected fail(message: string, status = 400): NextResponse<ApiResponse<null>> {
    return NextResponse.json(
      {
        success: false,
        error: message,
      },
      { status }
    );
  }

  protected abstract handle(
    req: NextRequest,
    context?: { params?: any }
  ): Promise<NextResponse>;
}
