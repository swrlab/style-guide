import type { Config } from '../types.ts'
import { pluginSecurity } from '../plugins.ts'

pluginSecurity.configs.recommended.name = 'audiolab/security/recommended'

export const security = (): Config[] => [
	pluginSecurity.configs.recommended,
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
