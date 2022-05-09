export function map<T, R, U>(guard: Guard<T>, mapper: Mapper<T, U>, x: T | R): U | R {
  if (guard(x)) {
    return mapper(x);
  }
  return x;
}

type Guard<T> = (x: any) => x is T;
type Mapper<T, U> = (x: T) => U;
