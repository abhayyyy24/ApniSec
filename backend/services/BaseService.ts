export abstract class BaseService {
  protected assert(condition: boolean, message: string): void {
    if (!condition) {
      throw new Error(message);
    }
  }
}
