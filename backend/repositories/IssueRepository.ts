import { prisma } from '@/lib/prisma';
import { BaseRepository } from './BaseRepository';
import { Issue, IssueType } from '@prisma/client';

export class IssueRepository extends BaseRepository<typeof prisma.issue> {
  constructor() {
    super(prisma.issue);
  }

  create(data: {
    userId: string;
    type: IssueType;
    title: string;
    description: string;
    priority?: any;
    status?: any;
  }): Promise<Issue> {
    return this.model.create({ data });
  }

  findAllByUser(userId: string, type?: IssueType): Promise<Issue[]> {
    return this.model.findMany({
      where: {
        userId,
        ...(type && { type }),
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  findById(id: string, userId: string): Promise<Issue | null> {
    return this.model.findFirst({
      where: { id, userId },
    });
  }

  update(
    id: string,
    userId: string,
    data: Partial<Issue>
  ): Promise<Issue> {
    return this.model.update({
      where: { id },
      data,
    });
  }

  delete(id: string): Promise<Issue> {
    return this.model.delete({ where: { id } });
  }
}
