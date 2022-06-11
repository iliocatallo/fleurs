export type Guard<M> = (x: any) => x is M;

export type GuardType<G> = G extends (x: any) => x is infer M ? M : never;
