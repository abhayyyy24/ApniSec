import { prisma } from '@/lib/prisma';
import { BaseRepository } from './BaseRepository';
import { User } from '@prisma/client';

export class UserRepository extends BaseRepository<typeof prisma.user> {
  constructor() {
    super(prisma.user);
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.model.findUnique({ where: { email } });
  }

  async findById(id: string): Promise<User | null> {
    return this.model.findUnique({ where: { id } });
  }

  async createUser(data: {
    email: string;
    passwordHash: string;
    firstName?: string;
    lastName?: string;
  }): Promise<User> {
    return this.model.create({ data });
  }
}
