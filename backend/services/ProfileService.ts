import { UserRepository } from '../repositories/UserRepository';

export class ProfileService {
  private userRepo: UserRepository;

  constructor() {
    this.userRepo = new UserRepository();
  }

  async getProfile(userId: string) {
    const user = await this.userRepo.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }

    return {
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
    };
  }

  async updateProfile(
    userId: string,
    data: { firstName?: string; lastName?: string }
  ) {
    const user = await this.userRepo.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }

    return this.userRepo['model'].update({
      where: { id: userId },
      data,
    });
  }
}
