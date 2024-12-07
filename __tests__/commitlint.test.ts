import { describe, expect, test } from 'bun:test';
import { validateConfig } from '@commitlint/config-validator';
import semver from 'semver';
import clConfig from '../commitlint.config.ts';
import packageJson from '../package.json';

describe('commitlint', () => {
	test('is pinned peerDependency', () => {
		expect(
			semver.valid(packageJson.peerDependencies['@commitlint/cli']),
		).not.toBeNull();
		expect(packageJson.devDependencies).not.toContainKey('@commitlint/cli');
		if ('dependencies' in packageJson) {
			expect(packageJson.dependencies).not.toContainKey('@commitlint/cli');
		}
	});

	test('is exported as ./commitlint in package.json', () => {
		expect('./commitlint' in packageJson.exports).toBe(true);
		expect(packageJson.exports['./commitlint']).toEqual(
			'./commitlint.config.ts',
		);
	});

	test('config validates with validator function', () => {
		expect(validateConfig('commitlint.config.ts', clConfig)).toBeUndefined();
	});
});
