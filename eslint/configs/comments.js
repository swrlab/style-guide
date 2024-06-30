import { pluginComments } from '../plugins.js'

/**
 * @typedef {import("eslint-define-config").FlatESLintConfigItem} FlatESLintConfigItem
 */

/**
 * @returns {FlatESLintConfigItem[]}
 */
export const comments = [
	{
		plugins: {
			'eslint-comments': pluginComments,
		},
		rules: {
			...pluginComments.configs.recommended.rules,
			/**
			 * Warn if ESlint enable directives are missing after disable directives.
			 *
			 * 🚫 Not fixable - https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/disable-enable-pair.html
			 */
			'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
			/**
			 * Require comments on ESlint disable directives.
			 *
			 * 🚫 Not fixable - https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/require-description.html
			 */
			'eslint-comments/require-description': 'error',
		},
	},
]
