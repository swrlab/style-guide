import { pluginSonarJS } from '../plugins.js'

/** @type {import("eslint-define-config").FlatESLintConfigItem[]} */
export const sonarjs = [
	{
		plugins: {
			sonarjs: pluginSonarJS,
		},
		rules: {
			// does not yet work with ESlint Flat Config
			// ...pluginSonarJS.configs.recommended.rules,
			'sonarjs/cognitive-complexity': ['error', 40],
		},
	},
]
