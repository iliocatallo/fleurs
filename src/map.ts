import { Guard } from './Guard';

export function mapIf<U, H extends U, O>(guard: Guard<H>, mapper: Mapper<H, O>, x: U): Exclude<U, H> | O {
  if (guard(x)) {
    return mapper(x);
  }
  return x as Exclude<U, H>;
}

export function mapUnless<U, H extends U, O>(guard: Guard<H>, mapper: Mapper<Exclude<U, H>, O>, x: U): H | O {
  if (guard(x)) {
    return x;
  }
  return mapper(x as Exclude<U, H>);
}

type Mapper<A, B> = (x: A) => B;
