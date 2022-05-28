import { Guard } from './Guard';

export function mapIf<H, R, O>(guard: Guard<H>, mapper: Mapper<H, O>, x: H | R): O | R {
  if (guard(x)) {
    return mapper(x);
  }
  return x;
}

export function mapUnless<H, R, O>(guard: Guard<H>, mapper: Mapper<R, O>, x: H | R): H | O {
  if (guard(x)) {
    return x;
  }
  return mapper(x);
}

type Mapper<T, O> = (x: T) => O;
