import { pluginNode } from '../plugins.js'

export const node = [
	pluginNode.configs['flat/recommended-script'],
	{
		rules: {
			'n/handle-callback-err': ['error', '^(err|error)$'],
			'n/no-deprecated-api': 'error',
			'n/no-exports-assign': 'error',
			'n/no-new-require': 'error',
			'n/no-path-concat': 'error',
			'n/no-unsupported-features/es-builtins': 'error',
			'n/prefer-global/buffer': ['error', 'never'],
			'n/prefer-global/process': ['error', 'never'],
			'n/process-exit-as-throw': 'error',
		},
	},
]
