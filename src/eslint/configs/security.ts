import type { Config } from '../types.ts'
import { pluginSecurity } from '../plugins.ts'

pluginSecurity.configs.recommended.name = 'audiolab/security/recommended'

export const security = (): Config[] => [
	pluginSecurity.configs.recommended,

	{
		name: 'audiolab/security/disabled-rules',
		rules: {
			// TODO: enable rules in strict mode
			'security/detect-object-injection': 'off',
			'security/detect-non-literal-fs-filename': 'off',
		},
	},
	// {
	// 	name: 'audiolab/security/recommended',
	// 	plugins: {
	// 		security: pluginSecurity,
	// 	},
	// 	rules: {
	// 		...pluginSecurity.configs.recommended.rules,
	// 	},
	// },
]
