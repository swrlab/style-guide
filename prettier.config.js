import audiolabPretterConfig from './src/prettier/index.ts'

/**
 * @see https://prettier.io/docs/configuration
 * @type {import('prettier').Config}
 */
const config = {
	...audiolabPretterConfig,
	// prettier experimental cli does not take .editorconfig into account
	printWidth: 120,
	// // plugins: ['@prettier/plugin-oxc'],
	// overrides: [
	// 	{
	// 		files: '**/*.{js,mjs,cjs}',
	// 		options: {
	// 			plugins: ['@prettier/plugin-oxc'],
	// 			parser: 'oxc',
	// 		},
	// 	},
	// 	{
	// 		files: '**/*.{ts,mts,cts}',
	// 		options: {
	// 			plugins: ['@prettier/plugin-oxc'],
	// 			parser: 'oxc-ts',
	// 		},
	// 	},
	// ],
}

export default config
