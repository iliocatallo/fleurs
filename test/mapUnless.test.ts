import { expectType } from 'ts-expect';
import { test } from 'uvu';
import * as assert from 'uvu/assert';
import { mapUnless } from '../src/map';

test(`values that do not satisfy the the type guard get transformed`, () => {
  const input = 20;

  const res = mapUnless(isString, (x: number) => true, input);

  assert.is(res, true);
  expectType<string | boolean>(res);
});

test(`values that satisfy the type guard are returned as-is`, () => {
  const input = 'hello';

  const res = mapUnless(isString, (x: number) => true, input);

  assert.is(res, 'hello');
  expectType<string | boolean>(res);
});

test.run();

const isString = (x: string | number): x is string => typeof x == 'string';
