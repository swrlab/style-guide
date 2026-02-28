import type { Config } from '../types.ts'
import { GLOB_JSON, GLOB_JSON5, GLOB_JSON_WITH_COMMENTS, GLOB_JSONC } from '../constants.ts'
import { parserJsonc, pluginJsonc } from '../plugins.ts'

export const jsonc = (): Config[] => [
	...pluginJsonc.configs['recommended-with-json'].map((config) => ({
		...config,
		name: `audiolab/jsonc/${config.name || 'recommended'}`,
	})),
	{
		files: [GLOB_JSON],
		name: 'audiolab/json/rules',
		rules: {
			'jsonc/no-comments': 'warn',
		},
	},
	{
		files: [GLOB_JSON, GLOB_JSON5, GLOB_JSONC],
		languageOptions: {
			parser: parserJsonc,
		},
		name: 'audiolab/jsonc/rules',
		rules: {
			'jsonc/quote-props': 'off',
			'jsonc/quotes': 'off',
		},
	},
	// jsonc-files should only allow comments but no trailing commas (juse json5 for that)
	{
		files: [GLOB_JSONC],
		name: 'audiolab/jsonc/rules',
		rules: {
			'jsonc/comma-dangle': ['error', 'never'],
		},
	},
	// some .json files may contains comments that are ok
	{
		files: [...GLOB_JSON_WITH_COMMENTS],
		name: 'audiolab/json/disables',
		rules: {
			'jsonc/no-comments': 'off',
		},
	},
]
