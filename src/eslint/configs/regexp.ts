import type { Config } from '../types.ts'
// TODO: why is it inline here and not in `plugins.ts`?
import { configs } from 'eslint-plugin-regexp'

export const regexp = (): Config[] => [
	{
		...(configs['flat/recommended'] as Config),
		name: 'audiolab/regexp',
	},
]
