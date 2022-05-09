import { test } from 'uvu';
import * as assert from 'uvu/assert';
import { mapUnless } from '../src/map';
import { isString } from './isString';

test(`mapUnless transforms values that do not satisfy the type guard`, () => {
  const input: string | number = 20;

  const res = mapUnless(isString, (x: number) => x + 2, input);

  assert.is(res, 22);
});

test(`mapUnles ignores values that satisfy the type guard`, () => {
  const input: string | number = 'hello';

  const res = mapUnless(isString, (x: number) => x + 2, input);

  assert.is(res, 'hello');
});

test.run();