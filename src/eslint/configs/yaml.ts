import type { Config } from '../types.ts'
import { GLOB_YAML } from '../constants.ts'
import { pluginYaml } from '../plugins.ts'

const yamlConfigs = Array.from(new Set([...pluginYaml.configs.standard, ...pluginYaml.configs.prettier]))

export const yaml = (): Config[] => [
	...yamlConfigs.map((config) => ({
		...config,
		name: 'audiolab/yaml/standard',
	})),
	{
		files: [GLOB_YAML],
		name: 'audiolab/yaml/rules',
		rules: {
			'yml/no-empty-mapping-value': 'off',
		},
	},
]
