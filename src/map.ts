export function map<T, R, O>(guard: Guard<T>, mapper: Mapper<T, O>, x: T | R): O | R {
  if (guard(x)) {
    return mapper(x);
  }
  return x;
}

type Guard<T> = (x: any) => x is T;
type Mapper<T, O> = (x: T) => O;
