import { Resend } from 'resend';
import { EmailTemplates } from './templates';

export class EmailService {
  private resend: Resend;
  private fromEmail = 'ApniSec <no-reply@apnisec.com>';

  constructor() {
    this.resend = new Resend(process.env.RESEND_API_KEY);
  }

  async sendWelcomeEmail(to: string, name?: string) {
    await this.resend.emails.send({
      from: this.fromEmail,
      to,
      subject: 'Welcome to ApniSec',
      html: EmailTemplates.welcomeEmail(name),
    });
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
