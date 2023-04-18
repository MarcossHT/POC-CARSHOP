export interface IUseCase<T = void, R = void> {
  execute(input: T): R;
}
