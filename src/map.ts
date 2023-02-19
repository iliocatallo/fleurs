import { Guard, In, Out } from './Guard';

export function mapIf<G extends Guard<any, any>, O>(guard: G, mapper: Mapper<Out<G>, O>, x: In<G>): Exclude<In<G>, Out<G>> | O {
  if (guard(x)) {
    return mapper(x as Out<G>);
  }
  return x as Exclude<In<G>, Out<G>>;
}

export function mapUnless<G extends Guard<any, any>, O>(guard: G, mapper: Mapper<Exclude<In<G>, Out<G>>, O>, x: In<G>): Out<G> | O {
  if (guard(x)) {
    return x;
  }
  return mapper(x as Exclude<In<G>, Out<G>>);
}

type Mapper<A, B> = (x: A) => B;
