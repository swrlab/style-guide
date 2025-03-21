import {
	ignores,
	comments,
	errors,
	imports,
	javascript,
	node,
	prettier,
	json,
	perfectionist,
	sortPackageJson,
	unicorn,
	vue,
	sonarjs,
} from './configs/index.js'

/**
 * @typedef {import('eslint-define-config').FlatESLintConfigItem} FlatESLintConfigItem
 */

/** Ignore common files and include javascript support */
export const presetJavaScript = [
	...ignores,
	...javascript,
	...comments,
	...imports,
	...errors,
	...unicorn,
	...node,
	...sonarjs,
]
/** Includes `presetJavaScript` and typescript support */
export const presetBasic = [...presetJavaScript, ...json, ...perfectionist, ...sortPackageJson]
export const presetAll = [...presetBasic, ...vue, ...prettier]
export { presetBasic as basic, presetAll as all }

const migrationOverwrites = [
	{
		rules: {
			'eslint-comments/require-description': 'off',
			'unicorn/filename-case': 'off',
			'unicorn/prefer-node-protocol': 'off',
			'import/order': 'off',
		},
	},
]

/**
 *
 * @param {FlatESLintConfigItem | FlatESLintConfigItem[]} config
 * @param {{prettier: boolean, vue: boolean, migrate?: boolean}} features
 * @returns {FlatESLintConfigItem[]}
 */
export function audiolab(
	config = [],
	{ prettier: enablePrettier = true, vue: enableVue = true, migrate = false } = {}
) {
	const configs = [...presetBasic]
	if (enableVue) {
		configs.push(...vue)
	}
	if (enablePrettier) {
		configs.push(...prettier)
	}
	if (Object.keys(config).length > 0) {
		configs.push(...(Array.isArray(config) ? config : [config]))
	}
	if (migrate) {
		configs.push(...migrationOverwrites)
	}
	return configs
}
