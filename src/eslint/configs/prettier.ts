import type { Config } from '../types.ts'
import { pluginPrettier, pluginPrettierRecommended } from '../plugins.ts'

const rules = { ...pluginPrettierRecommended.rules }
delete rules['vue/html-self-closing']

export const prettier = (): Config[] => [
	{
		name: 'audiolab/prettier',
		plugins: {
			prettier: pluginPrettier,
		},
		rules: {
			...rules,
			'prettier/prettier': 'warn',
		},
	},
]
