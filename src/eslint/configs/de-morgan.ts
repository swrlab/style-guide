import type { Config } from '../types.ts'
import { pluginDeMorgan } from '../plugins.ts'

export const deMorgan = (): Config[] => [
	{
		...pluginDeMorgan.configs.recommended,
		name: 'audiolab/de-morgan',
	},
]
