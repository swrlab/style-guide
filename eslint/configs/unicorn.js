import { pluginUnicorn } from '../plugins.js'

export const unicorn = [
	{
		plugins: {
			unicorn: pluginUnicorn,
		},
		rules: {
			/**
			 * Require consistent filename case for all linted files.
			 * Disabled for now.
			 *
			 * 🚫 Not fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/filename-case.md
			 */
			// 'unicorn/filename-case': [
			// 	'error',
			// 	{
			// 		case: 'kebabCase',
			// 	},
			// ],
			/**
			 * Require using the `node:` protocol when importing Node.js built-in modules.
			 *
			 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-node-protocol.md
			 */
			'unicorn/prefer-node-protocol': 'warn',
		},
	},
]
