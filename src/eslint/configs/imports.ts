import type { Config } from '../types.ts'
import { pluginImport } from '../plugins.ts'

const rules: Config['rules'] = {
	'import/first': 'error',
	'import/no-duplicates': 'error',
	'import/no-mutable-exports': 'error',
	'import/no-named-default': 'error',
	'import/no-self-import': 'error',
	'import/no-webpack-loader-syntax': 'error',

	'no-duplicate-imports': ['error', { allowSeparateTypeImports: true }],
}

type OptionsStrict = { strict?: boolean }
export const imports = (options: OptionsStrict = {}): Config[] => {
	if (options.strict) {
		// rules['import/consistent-type-specifier-style'] = [ 'error', 'prefer-top-level' ]
		rules['import/no-default-export'] = 'error'
		rules['import/newline-after-import'] = ['error', { count: 1 }]
	}
	return [
		{
			name: 'weiland/imports',
			plugins: {
				import: pluginImport,
			},
			rules,
		},
	]
}
