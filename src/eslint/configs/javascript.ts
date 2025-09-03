import type { Config } from '../types.ts'
import globals from 'globals'
import { GLOB_JS } from '../constants.ts'
import { configJs, pluginUnusedImports } from '../plugins.ts'

const ecmaVersion = 2026

export type JSOptions = {
	strict?: boolean
	isInEditor?: boolean
}

export const javascript = ({ isInEditor = false, strict = true }: JSOptions = {}): Config[] => [
	{
		languageOptions: {
			ecmaVersion, // default is `latest`
			globals: {
				...globals.browser,
				...globals.es2026,
				...globals.node,

				...(strict
					? {
							document: 'readonly',
							navigator: 'readonly',
							window: 'readonly',
						}
					: {}),
			},
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
				// usually, these values are inherited from `languageOptions`
				ecmaVersion,
				sourceType: 'module',
			},
			sourceType: 'module',
		},
		linterOptions: {
			reportUnusedDisableDirectives: true,
		},
		name: 'audiolab/js/setup',
	},
	{ ...configJs.configs.recommended, name: 'audiolab/js/recommended' },
	{
		name: 'audiolab/js/rules',
		plugins: {
			'unused-imports': pluginUnusedImports,
		},
		rules: {
			'array-callback-return': 'error',
			'block-scoped-var': 'error',
			'dot-notation': 'warn',
			eqeqeq: ['error', 'smart'],
			'no-alert': 'warn',
			'no-console': ['warn', { allow: ['warn', 'error', 'info', 'clear'] }],
			'no-debugger': 'warn',
			'no-empty': ['error', { allowEmptyCatch: true }],
			'no-fallthrough': ['warn', { commentPattern: String.raw`break[\s\w]*omitted` }],
			'no-inner-declarations': 'error',
			'no-lonely-if': 'error',
			'no-multi-str': 'error',
			'no-restricted-syntax': ['error', 'TSExportAssignment'],
			'no-unused-expressions': [
				'error',
				{
					allowShortCircuit: true,
					allowTaggedTemplates: true,
					allowTernary: true,
				},
			],
			'no-unused-vars': 'off', // `unused-imports/` plugin is used instead
			'no-useless-call': 'error',
			'no-useless-computed-key': 'error',
			'no-useless-constructor': 'error',
			'no-useless-rename': 'error',
			'no-var': 'error',
			'no-void': 'error',
			'object-shorthand': ['error', 'always', { avoidQuotes: true, ignoreConstructors: false }],
			'one-var': ['error', { initialized: 'never' }],
			'prefer-arrow-callback': ['error', { allowNamedFunctions: false, allowUnboundThis: true }],
			'prefer-const': ['warn', { destructuring: 'all', ignoreReadBeforeAssign: true }],
			'prefer-exponentiation-operator': 'error',
			'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
			'prefer-rest-params': 'error',
			'prefer-spread': 'error',
			'prefer-template': 'error',
			'require-await': 'error',
			'unicode-bom': ['error', 'never'],
			'unused-imports/no-unused-imports': isInEditor ? 'warn' : 'error',
			'unused-imports/no-unused-vars': [
				'error',
				{
					args: 'after-used',
					argsIgnorePattern: '^_',
					ignoreRestSiblings: true,
					vars: 'all',
					varsIgnorePattern: '^_',
				},
			],
			'use-isnan': ['error', { enforceForIndexOf: true, enforceForSwitchCase: true }],
			'valid-typeof': ['error', { requireStringLiterals: true }],
			'vars-on-top': 'error',
			yoda: ['warn', 'never', { exceptRange: true }],

			...(strict ? { 'no-use-before-define': ['error', { classes: false, functions: false, variables: true }] } : {}),
		},
	},
	{
		files: [GLOB_JS],
		name: 'audiolab/javascript/js-only',
		rules: {
			'no-duplicate-imports': 'error',
		},
	},
]
