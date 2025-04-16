import eslint from '@eslint/js'
import eslintPluginVue from 'eslint-plugin-vue'
import globals from 'globals'
import typescriptEslint from 'typescript-eslint'

export const typescriptEslintConfig = typescriptEslint.config(
	{ ignores: ['*.d.ts', '**/coverage', '**/dist'] },
	{
		extends: [
			eslint.configs.recommended,
			...typescriptEslint.configs.recommended,
			// ...eslintPluginVue.configs['flat/recommended'],
			...eslintPluginVue.configs['flat/essential'],
		],
		files: ['**/*.{ts,vue}'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: globals.browser,
			parserOptions: {
				parser: typescriptEslint.parser,
			},
		},
		rules: {
			'vue/html-indent': ['error', 'tab'],
		},
	}
)
