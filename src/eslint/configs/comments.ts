import type { Config } from '../types.ts'
import { configComments } from '../plugins.ts'

export const comments = (): Config[] => [
	{
		...configComments.recommended,
		name: 'audiolab/comments/recommended',
	},
	{
		name: 'audiolab/comments',
		rules: {
			/**
			 * Warn if ESlint enable directives are missing after disable directives.
			 *
			 * 🚫 Not fixable - https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/disable-enable-pair.html
			 */
			'@eslint-community/eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
			/**
			 * Require comments on ESlint disable directives.
			 *
			 * 🚫 Not fixable - https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/require-description.html
			 */
			'@eslint-community/eslint-comments/require-description': 'error',
		},
	},
]
