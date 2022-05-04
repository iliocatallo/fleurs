import { test } from 'uvu';
import * as assert from 'uvu/assert';
import { map } from '../src/map';

test(`map values satisfying the type guard`, () => {

	const input: string | number = 'hello';

	const res = map(isString, (s: string) => s.toUpperCase(), input);

	assert.is(res, 'HELLO');
});

test('ignore values that do not satisfy the type guard', () => {
	const input: string | number = 42;

	const res = map(isString, (s: string) => s.toUpperCase(), input);

	assert.is(res, 42);
})

const isString = (x: any): x is string => typeof x == 'string'

test.run();