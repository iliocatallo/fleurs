import assert from 'node:assert/strict';
import { test } from 'node:test';
import { expectType } from 'ts-expect';
import { mapIf } from '../src/map';

test(`values that satisfy the type guard get transformed`, () => {
  const input = 'hello';

  const res = mapIf(isString, (s: string) => true, input);

  assert.equal(res, true);
  expectType<number | boolean>(res);
});

test('values that do not satisfy the type guard are returned as-is', () => {
  const input = 42;

  const res = mapIf(isString, (s: string) => true, input);

  assert.equal(res, 42);
  expectType<number | boolean>(res);
});

const isString = (x: string | number): x is string => typeof x == 'string';
