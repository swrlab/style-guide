/**
 * Some of Prettier's defaults can be overridden by an EditorConfig file.
 * We define those here to ensure that doesn't happen.
 *
 * See: https://github.com/prettier/prettier/blob/main/docs/configuration.md#editorconfig
 */
const overridableDefaults = {
	endOfLine: 'lf',
	// tabWidth is neither set in .editorconfig nor here, so every developer
	// can set their own preference in their editor locally.
	// tabWidth: 8,
	// default is 80
	// same goes with `printWidth`. We inherit this value from the local editorconfig.
	// printWidth: 120,
	useTabs: true,
	semi: false,
	singleQuote: true,
	trailingComma: 'es5',
}

/**
 * @type {import('prettier').Config}
 * @see https://prettier.io/docs/en/options.html
 */
export const config = {
	...overridableDefaults,
	overrides: [
		{
			files: ['**/*.jsonc'],
			options: {
				trailingComma: 'none',
			},
		},
		{
			files: ['*.yml', '*.yaml', '*.md'],
			options: {
				useTabs: false,
				tabWidth: 2,
			},
		},
	],
}

export default config
