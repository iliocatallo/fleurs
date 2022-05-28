import { expectType } from 'ts-expect';
import { test } from 'uvu';
import * as assert from 'uvu/assert';
import { mapUnless } from '../src/map';
import { isString } from './isString';

test(`values that do not satisfy the the type guard get transformed`, () => {
  const input = <string | number> 20;

  const res = mapUnless(isString, (x: number) => true, input);

  expectType<string | boolean>(res);
  assert.is(res, true);
});

test(`values that satisfy the type guard are returned as-is`, () => {
  const input = <string | number> 'hello';

  const res = mapUnless(isString, (x: number) => true, input);

  expectType<string | boolean>(res);
  assert.is(res, 'hello');
});

test.run();
