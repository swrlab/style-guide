import type { Config } from '../types.ts'
import { pluginSonarJS } from '../plugins.ts'

pluginSonarJS.configs.recommended.name = 'audiolab/sonarjs/recommended'

export const sonarjs = (): Config[] => [
	pluginSonarJS.configs.recommended,
	{
		name: 'audiolab/sonarjs/rules',
		rules: {
			// increase from `15` to `40`
			// TODO: add strict for this rule
			'sonarjs/cognitive-complexity': ['error', 40],

			'sonarjs/no-unused-vars': 'off',
			'sonarjs/todo-tag': 'off',
		},
	},
]
