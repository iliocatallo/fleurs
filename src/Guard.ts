export type Guard<T> = (x: any) => x is T;

export type GuardType<G> = G extends (x: any) => x is infer T ? T : never;
