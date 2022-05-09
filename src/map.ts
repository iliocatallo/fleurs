export function map<T, R, U>(guard: Guard<T>, mapper: Mapper<T, U>, x: T | R): U | R {
  if (guard(x)) {
    return mapper(x);
  }
  return x;
}

export function mapUnless<T, R, U>(guard: Guard<T>, mapper: Mapper<R, U>, x: T | R): T | U {
  if (guard(x)) {
    return x;
  }
  return mapper(x);
}

type Guard<T> = (x: any) => x is T;
type Mapper<T, U> = (x: T) => U;
