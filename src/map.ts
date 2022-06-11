import { Guard, M, U } from './Guard';

export function mapIf<G extends Guard<any, any>, O>(guard: G, mapper: Mapper<M<G>, O>, x: U<G>): Exclude<U<G>, M<G>> | O {
  if (guard(x)) {
    return mapper(x as M<G>);
  }
  return x as Exclude<U<G>, M<G>>;
}

export function mapUnless<G extends Guard<any, any>, O>(guard: G, mapper: Mapper<Exclude<U<G>, M<G>>, O>, x: U<G>): M<G> | O {
  if (guard(x)) {
    return x;
  }
  return mapper(x as Exclude<U<G>, M<G>>);
}

type Mapper<A, B> = (x: A) => B;
