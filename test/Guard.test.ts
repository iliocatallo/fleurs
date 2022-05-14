import { expectType, TypeEqual } from 'ts-expect';
import { test } from 'uvu';
import { GuardType } from '../src/Guard';

test(`A guard mentions a type in its type predicate`, () => {
  type IsString = (x: any) => x is string;

  expectType<TypeEqual<GuardType<IsString>, string>>(true);
});

test.run();
