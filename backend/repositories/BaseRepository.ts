export abstract class BaseRepository<T> {
  protected readonly model: T;

  constructor(model: T) {
    this.model = model;
  }
}
