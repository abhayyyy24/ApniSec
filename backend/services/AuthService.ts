import { UserRepository } from '../repositories/UserRepository';
import { PasswordUtil } from '../utils/PasswordUtil';
import { JwtUtil } from '../utils/JwtUtils';

export class AuthService {
  private userRepo: UserRepository;

  constructor() {
    this.userRepo = new UserRepository();
  }

  async register(input: {
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
  }) {
    console.log('Runtime:', process.env.NEXT_RUNTIME);
    const existingUser = await this.userRepo.findByEmail(input.email);
    if (existingUser) {
      throw new Error('User already exists');
    }

    
    const passwordHash = await PasswordUtil.hash(input.password);

    
    const user = await this.userRepo.createUser({
      email: input.email,
      passwordHash,
      firstName: input.firstName,
      lastName: input.lastName,
    });

    
    const token = JwtUtil.sign({ userId: user.id });

    
    return {
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      },
      token,
    };
  }

  async login(email: string, password: string) {
    const user = await this.userRepo.findByEmail(email);
    if (!user) {
      throw new Error('Invalid credentials');
    }

    const isValid = await PasswordUtil.compare(password, user.passwordHash);
    if (!isValid) {
      throw new Error('Invalid credentials');
    }

    const token = JwtUtil.sign({ userId: user.id });

    return {
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      },
      token,
    };
  }

  async getCurrentUser(userId: string) {
    const user = await this.userRepo.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }

    return {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
    };
  }
}
