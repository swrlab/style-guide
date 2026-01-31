import type { RuleOptions } from '../types.generated.js'
import type { Config } from '../types.ts'
import { GLOB_YAML } from '../constants.ts'
import { parserYaml, pluginYaml } from '../plugins.ts'

export const yaml = (): Config[] => [
	{
		name: 'audiolab/yaml/setup',
		plugins: {
			yml: pluginYaml,
		},
	},
	{
		files: [GLOB_YAML],
		languageOptions: {
			parser: parserYaml,
		},
		name: 'audiolab/yaml/rules',
		rules: {
			...(pluginYaml.configs.standard as RuleOptions),
			...(pluginYaml.configs.prettier as RuleOptions),
			'yml/no-empty-mapping-value': 'off',
		},
	},
]
