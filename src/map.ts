import { Guard } from './Guard';

export function mapIf<U, O, M extends U>(guard: Guard<U, M>, mapper: Mapper<M, O>, x: U): Exclude<U, M> | O {
  if (guard(x)) {
    return mapper(x);
  }
  return x as Exclude<U, M>;
}

export function mapUnless<U, O, M extends U>(guard: Guard<U, M>, mapper: Mapper<Exclude<U, M>, O>, x: U): M | O {
  if (guard(x)) {
    return x;
  }
  return mapper(x as Exclude<U, M>);
}

type Mapper<A, B> = (x: A) => B;
