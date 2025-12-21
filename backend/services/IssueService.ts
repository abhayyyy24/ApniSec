import { IssueRepository } from '../repositories/IssueRepository';
import { IssueValidator } from '../validators/IssueValidator';
import { IssueType } from '@prisma/client';

export class IssueService {
  private repo: IssueRepository;

  constructor() {
    this.repo = new IssueRepository();
  }

  async createIssue(userId: string, input: any) {
    IssueValidator.validateCreate(input);

    return this.repo.create({
      userId,
      type: input.type,
      title: input.title,
      description: input.description,
      priority: input.priority,
      status: input.status,
    });
  }

  async listIssues(userId: string, type?: IssueType) {
    return this.repo.findAllByUser(userId, type);
  }

  async getIssue(userId: string, id: string) {
    const issue = await this.repo.findById(id, userId);
    if (!issue) throw new Error('Issue not found');
    return issue;
  }

  async updateIssue(userId: string, id: string, data: any) {
    await this.getIssue(userId, id);
    return this.repo.update(id, userId, data);
  }

  async deleteIssue(userId: string, id: string) {
    await this.getIssue(userId, id);
    return this.repo.delete(id);
  }
}
