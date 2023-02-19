export type Guard<U, M extends U> = (x: U) => x is M;

export type In<G> = G extends (x: infer U) => x is any ? U : never;
export type Out<G> = G extends (x: any) => x is infer M ? M : never;
