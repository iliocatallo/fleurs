export type Guard<U, M extends U> = (x: U) => x is M;

export type GuardInputType<G> = G extends (x: infer M) => x is any ? M : never;
export type GuardType<G> = G extends (x: any) => x is infer M ? M : never;
