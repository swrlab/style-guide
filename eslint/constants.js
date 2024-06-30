export const ECMA_VERSION = 2022
export const GLOB_SRC_EXT = '?([cm])[jt]s?(x)'
export const GLOB_JS = '**/*.?([cm])js'
export const JAVASCRIPT_FILES = ['*.js?(x)', '*.mjs']
export const TYPESCRIPT_FILES = ['*.ts?(x)']
export const GLOB_EXCLUDE = [
	'**/node_modules',
	'**/dist',
	'**/package-lock.json',
	'**/yarn.lock',
	'**/pnpm-lock.yaml',
	'**/bun.lockb',

	'**/coverage',
	'**/.idea',
	'**/.output',
	'**/.vite-inspect',
	'**/.nitro',

	'**/*.min.*',

	'CHANGELOG*.md',
	'**/CHANGELOG*.md',
]
export const GLOB_JSON = '**/*.json'
