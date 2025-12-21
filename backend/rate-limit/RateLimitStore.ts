interface RateLimitEntry {
  count: number;
  resetAt: number;
}

export class RateLimitStore {
  private store = new Map<string, RateLimitEntry>();

  get(key: string): RateLimitEntry | null {
    const entry = this.store.get(key);

    if (!entry) return null;

    if (Date.now() > entry.resetAt) {
      this.store.delete(key);
      return null;
    }

    return entry;
  }

  set(key: string, entry: RateLimitEntry): void {
    this.store.set(key, entry);
  }
}
