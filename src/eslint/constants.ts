export const GLOB_SRC_EXT = '?([cm])[jt]s?(x)'
export const GLOB_SRC = '**/*.?([cm])[jt]s?(x)'

export const GLOB_JS = '**/*.?([cm])js'
export const GLOB_JSX = '**/*.?([cm])jsx'

export const GLOB_TS = '**/*.?([cm])ts'
export const GLOB_TSX = '**/*.tsx'

export const GLOB_STYLE = '**/*.{c,le,sc}ss'
export const GLOB_CSS = '**/*.css'
export const GLOB_SCSS = '**/*.scss'

export const GLOB_JSON = '**/*.json'
export const GLOB_JSON5 = '**/*.json5'
export const GLOB_JSONC = '**/*.jsonc'

export const GLOB_ASTRO = '**/*.astro'
export const GLOB_MARKDOWN = '**/*.md'
export const GLOB_SVELTE = '**/*.svelte?(.{js,ts})'
export const GLOB_VUE = '**/*.vue'
export const GLOB_YAML = '**/*.y?(a)ml'
export const GLOB_HTML = '**/*.htm?(l)'

export const GLOB_PACKAGE_JSON = '**/package.json'

/** .json-files that may contain comments */
export const GLOB_JSON_WITH_COMMENTS: string[] = [
	GLOB_PACKAGE_JSON,
	'**/tsconfig.json',
	'**/.zed/settings.json',
	'**/.zed/settings.jsonc',
	'**/deno.json',
]

// `node_modules` and `.git` are ignored by default in ESLint.
const GLOB_DIST = '**/dist' as const
const GLOB_LOCKFILE: string[] = ['**/package-lock.json', '**/yarn.lock', '**/pnpm-lock.yaml', '**/bun.lockb']
export const GLOB_EXCLUDE: string[] = [
	GLOB_DIST,
	...GLOB_LOCKFILE,

	'**/.nuxt',
	'**/.changeset',
	'**/.idea',

	'**/*.min.*',
]
