import type { Linter } from 'eslint'
import type { Config } from '../types.ts'
import { GLOB_JSON, GLOB_JSON5, GLOB_JSON_WITH_COMMENTS, GLOB_JSONC } from '../constants.ts'
import { parserJsonc, pluginJsonc } from '../plugins.ts'

export const jsonc = (): Config[] => [
	{
		name: 'weiland/jsonc/setup',
		plugins: {
			jsonc: pluginJsonc,
		},
	},
	{
		files: [GLOB_JSON],
		name: 'weiland/json/rules',
		rules: {
			...(pluginJsonc.configs['recommended-with-json'].rules as Linter.RulesRecord),
			'jsonc/no-comments': 'warn',
		},
	},
	{
		files: [GLOB_JSON, GLOB_JSON5, GLOB_JSONC],
		languageOptions: {
			parser: parserJsonc,
		},
		name: 'weiland/jsonc/rules',
		rules: {
			...(pluginJsonc.configs['recommended-with-jsonc'].rules as Linter.RulesRecord),
			'jsonc/quote-props': 'off',
			'jsonc/quotes': 'off',
		},
	},
	// some .json files may contains comments that are ok
	{
		files: [...GLOB_JSON_WITH_COMMENTS],
		name: 'weiland/json/disables',
		rules: {
			'jsonc/no-comments': 'off',
		},
	},
]
