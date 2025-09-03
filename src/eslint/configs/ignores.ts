import type { Config } from '../types.ts'
import { GLOB_EXCLUDE } from '../constants.ts'
import { pluginIgnore } from '../plugins.ts'

export const ignores = (): Config[] => [
	{
		ignores: GLOB_EXCLUDE,
		name: 'weiland/ignores',
	},
	{
		...pluginIgnore({ strict: false }),
		name: 'weiland/gitignore',
	},
]
