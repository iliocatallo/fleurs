import { test } from 'uvu';
import * as assert from 'uvu/assert';
import { map } from '../src/map';
import { isString } from './isString';

test(`map transforms values that satisfy the type guard`, () => {
  const input: string | number = 'hello';

  const res = map(isString, (s: string) => s.toUpperCase(), input);

  assert.is(res, 'HELLO');
});

test('map ignores values that do not satisfy the type guard', () => {
  const input: string | number = 42;

  const res = map(isString, (s: string) => s.toUpperCase(), input);

  assert.is(res, 42);
});

test.run();
