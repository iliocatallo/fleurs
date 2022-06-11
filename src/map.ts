import { Guard, M, U } from './Guard';

export function mapIf<G extends Guard<any, any>, O>(guard: G, mapper: Mapper<M<G>, O>, x: U<G>): Exclude<U<G>, M<G>> | O {
  if (guard(x)) {
    return mapper(x as M<G>);
  }
  return x as Exclude<U<G>, M<G>>;
}

export function mapUnless<U, O, M extends U>(guard: Guard<U, M>, mapper: Mapper<Exclude<U, M>, O>, x: U): M | O {
  if (guard(x)) {
    return x;
  }
  return mapper(x as Exclude<U, M>);
}

type Mapper<A, B> = (x: A) => B;
