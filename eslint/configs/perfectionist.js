import { pluginPerfectionist } from '../plugins.js'

/** @type {import("eslint-define-config").FlatESLintConfigItem[]} */
export const perfectionist = [
	{
		plugins: {
			perfectionist: pluginPerfectionist,
		},
	},
]
