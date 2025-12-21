import { IssueType } from '@prisma/client';

export class IssueValidator {
  static validateCreate(input: any) {
    if (!input.type || !Object.values(IssueType).includes(input.type)) {
      throw new Error('Invalid issue type');
    }

    if (!input.title || input.title.length < 3) {
      throw new Error('Title is required');
    }

    if (!input.description || input.description.length < 5) {
      throw new Error('Description is required');
    }
  }
}
