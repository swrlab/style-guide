import { configPrettier, pluginPrettier } from '../plugins.js'

const prettierConflictRules = { ...configPrettier.rules }
delete prettierConflictRules['vue/html-self-closing']

/** @type {import('eslint-define-config').FlatESLintConfigItem[]} */
export const prettier = [
	// Any other config imports go at the top
	// pluginPrettierRecommended,
	{
		// ignores: ['package.json'],
		plugins: {
			prettier: pluginPrettier,
		},
		rules: {
			...prettierConflictRules,
			...pluginPrettier.configs.recommended.rules,
			'prettier/prettier': [
				'warn',
				{
					// printWidth: 120,
					useTabs: true,
				},
			],
		},
	},
]
