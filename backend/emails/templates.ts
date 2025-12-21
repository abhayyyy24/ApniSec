export class EmailTemplates {
  static welcomeEmail(name?: string) {
    return `
      <h2>Welcome to ApniSec 👋</h2>
      <p>Hello ${name || 'there'},</p>
      <p>Thank you for registering with <strong>ApniSec</strong>.</p>
      <p>We’re excited to have you on board.</p>
      <br />
      <p>— ApniSec Team</p>
    `;
  }

  static issueCreatedEmail(issue: {
    type: string;
    title: string;
    description: string;
  }) {
    return `
      <h2>New Issue Created</h2>
      <p><strong>Type:</strong> ${issue.type}</p>
      <p><strong>Title:</strong> ${issue.title}</p>
      <p><strong>Description:</strong></p>
      <p>${issue.description}</p>
      <br />
      <p>— ApniSec Security Team</p>
    `;
  }
}
