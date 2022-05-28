import { expectType } from 'ts-expect';
import { test } from 'uvu';
import * as assert from 'uvu/assert';
import { mapIf } from '../src/map';
import { isString } from './isString';

test(`values that satisfy the type guard get transformed`, () => {
  const input = <string | number> 'hello';

  const res = mapIf(isString, (s: string) => true, input);

  expectType<number | boolean>(res);
  assert.is(res, true);
});

test('values that do not satisfy the type guard are returned as-is', () => {
  const input = <string | number> 42;

  const res = mapIf(isString, (s: string) => true, input);

  expectType<number | boolean>(res);
  assert.is(res, 42);
});

test.run();
