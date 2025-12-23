import { Resend } from 'resend';
import { EmailTemplates } from './templates';

export class EmailService {
  private resend: Resend;
  private fromEmail = 'ApniSec <onboarding@resend.dev>';

  constructor() {
    console.log('RESEND_API_KEY exists:', !!process.env.RESEND_API_KEY);
    this.resend = new Resend(process.env.RESEND_API_KEY);
  }

  async sendWelcomeEmail(to: string, name?: string) {
  try {
    const res = await this.resend.emails.send({
      from: 'ApniSec <onboarding@resend.dev>',
      to,
      subject: 'Welcome to ApniSec',
      html: EmailTemplates.welcomeEmail(name),
    });

    console.log('RESEND RESPONSE:', res);
  } catch (err) {
    console.error('RESEND ERROR:', err);
    throw err;
  }
}


  async sendIssueCreatedEmail(
    to: string,
    issue: {
      type: string;
      title: string;
      description: string;
    }
  ) {
    await this.resend.emails.send({
      from: this.fromEmail,
      to,
      subject: 'Issue Created Successfully',
      html: EmailTemplates.issueCreatedEmail(issue),
    });
  }
}
