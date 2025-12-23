// app/api/test-email/route.ts
import { EmailService } from '@/backend/emails/EmailService';

export const runtime = 'nodejs';

export async function GET() {
  await new EmailService().sendWelcomeEmail(
    'yourgmail@gmail.com',
    'Test'
  );

  return Response.json({ ok: true });
}
