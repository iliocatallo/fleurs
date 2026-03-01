import assert from 'node:assert/strict';
import { test } from 'node:test';
import { expectType } from 'ts-expect';
import { mapUnless } from '../src/map';

test(`values that do not satisfy the the type guard get transformed`, () => {
  const input = 20;

  const res = mapUnless(guard, (x: number) => true, input);

  assert.equal(res, true);
  expectType<string | boolean>(res);
});

test(`values that satisfy the type guard are returned as-is`, () => {
  const input = 'hello';

  const res = mapUnless(guard, (x: number) => true, input);

  assert.equal(res, 'hello');
  expectType<string | boolean>(res);
});

const guard = (x: string | number): x is string => typeof x == 'string';
