import type { ESLint } from 'eslint'
import type { Config } from '../types.ts'
import { GLOB_VUE } from '../constants.ts'
import { parserVue, pluginVue, pluginVueA11y, tseslint } from '../plugins.ts'
import { typescriptCore } from './typescript.ts'

const vueTs: Config[] = typescriptCore
	.filter((config) => config.name !== 'typescript-eslint/base')
	.map((config) => {
		return {
			...config,
			files: [GLOB_VUE],
			name: `weiland/vue/${config.name?.replace('weiland/', '') || 'anonymous'}`,
		}
	})

const vueA11y: Config[] = [
	{
		name: 'weiland/vue/a11y',
		rules: {
			'vue-a11y/alt-text': 'error',
			'vue-a11y/anchor-has-content': 'error',
			'vue-a11y/aria-props': 'error',
			'vue-a11y/aria-role': 'error',
			'vue-a11y/aria-unsupported-elements': 'error',
			'vue-a11y/click-events-have-key-events': 'error',
			'vue-a11y/form-control-has-label': 'error',
			'vue-a11y/heading-has-content': 'error',
			'vue-a11y/iframe-has-title': 'error',
			'vue-a11y/interactive-supports-focus': 'error',
			'vue-a11y/label-has-for': 'error',
			'vue-a11y/media-has-caption': 'warn',
			'vue-a11y/mouse-events-have-key-events': 'error',
			'vue-a11y/no-access-key': 'error',
			'vue-a11y/no-aria-hidden-on-focusable': 'error',
			'vue-a11y/no-autofocus': 'warn',
			'vue-a11y/no-distracting-elements': 'error',
			'vue-a11y/no-redundant-roles': 'error',
			'vue-a11y/no-role-presentation-on-focusable': 'error',
			'vue-a11y/no-static-element-interactions': 'error',
			'vue-a11y/role-has-required-aria-props': 'error',
			'vue-a11y/tabindex-no-positive': 'warn',
		},
	},
]

export type OptionsVue = {
	a11y?: boolean
	strict?: boolean
	typescript?: boolean
}

export const vue = (options: OptionsVue = {}): Config[] => [
	{
		languageOptions: {
			globals: {
				$: 'readonly',
				$$: 'readonly',
				$computed: 'readonly',
				$customRef: 'readonly',
				$ref: 'readonly',
				$shallowRef: 'readonly',
				$toRef: 'readonly',
				computed: 'readonly',
				defineEmits: 'readonly',
				defineExpose: 'readonly',
				defineProps: 'readonly',
				onMounted: 'readonly',
				onUnmounted: 'readonly',
				reactive: 'readonly',
				ref: 'readonly',
				shallowReactive: 'readonly',
				shallowRef: 'readonly',
				toRef: 'readonly',
				toRefs: 'readonly',
				watch: 'readonly',
				watchEffect: 'readonly',
			},
		},
		name: 'weiland/vue/setup',
		plugins: {
			vue: pluginVue,
			...(options.a11y ? { 'vue-a11y': pluginVueA11y } : {}),
		},
	},
	// re-use typescript rules as well
	...(options.typescript ? vueTs : []),
	{
		files: [GLOB_VUE],
		languageOptions: {
			parser: parserVue,
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
				extraFileExtensions: ['.vue'],
				parser: options.typescript ? tseslint.parser : null,
				sourceType: 'module',
			},
		},
		name: 'weiland/vue/rules',
		plugins: {
			'@typescript-eslint': tseslint.plugin as ESLint.Plugin,
			vue: pluginVue,
		},
		processor: pluginVue.processors['.vue'],
		rules: {
			...(pluginVue.configs[`flat/${options.strict ? 'recommended' : 'essential'}`]
				.map((c) => c.rules)
				.reduce((acc, c) => ({ ...acc, ...c }), {}) as any),

			'@typescript-eslint/explicit-function-return-type': 'off',
			'node/prefer-global/process': 'off',

			'vue/block-order': ['error', { order: ['script', 'template', 'style'] }],
			'vue/component-name-in-template-casing': ['error', 'PascalCase'],
			'vue/component-options-name-casing': ['error', 'PascalCase'],
			'vue/custom-event-name-casing': ['error', 'camelCase'],
			'vue/dot-notation': ['error', { allowKeywords: true }],
			'vue/eqeqeq': ['error', 'smart'],
			'vue/html-self-closing': [
				'error',
				{
					html: {
						component: 'always',
						normal: 'always',
						void: 'any',
					},
					math: 'always',
					svg: 'always',
				},
			],

			'vue/max-attributes-per-line': 'off',
			'vue/multi-word-component-names': 'off',

			'vue/no-constant-condition': 'warn',
			'vue/no-empty-pattern': 'error',
			'vue/no-loss-of-precision': 'error',
			'vue/no-ref-as-operand': 'off',
			'vue/no-setup-props-reactivity-loss': 'off',
			'vue/no-unused-refs': 'error',
			'vue/no-useless-v-bind': 'error',

			'vue/no-v-html': 'off',
			'vue/object-shorthand': [
				'error',
				'always',
				{
					avoidQuotes: true,
					ignoreConstructors: false,
				},
			],
			'vue/one-component-per-file': 'off',
			'vue/padding-line-between-blocks': ['error', 'always'],
			'vue/prefer-template': 'error',
			'vue/prop-name-casing': ['error', 'camelCase'],
			'vue/require-default-prop': 'off',
			'vue/require-prop-types': 'off',
		},
	},
	...(options.a11y ? vueA11y : []),
]
