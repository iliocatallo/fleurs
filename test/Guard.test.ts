import { expectType, TypeEqual } from 'ts-expect';
import { test } from 'uvu';
import { M, U } from '../src/Guard';

test(`A guard mentions a type in its type predicate`, () => {
  type IsString = (x: number | string) => x is string;

  expectType<TypeEqual<M<IsString>, string>>(true);
});

test(`A guard mentions a type in its input parameter`, () => {
  type IsString = (x: number | string) => x is string;

  expectType<TypeEqual<U<IsString>, number | string>>(true);
});

test.run();
