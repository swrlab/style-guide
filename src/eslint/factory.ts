import type { Linter } from 'eslint'
import type { Arrayable, Awaitable } from 'eslint-flat-config-utils'
import type { Config, ConfigNames } from './types.ts'
import { FlatConfigComposer } from 'eslint-flat-config-utils'

import {
	comments,
	deMorgan,
	ignores,
	imports,
	javascript,
	jsdoc,
	jsonc,
	markdown,
	node,
	prettier,
	regexp,
	security,
	sonarjs,
	sortImports,
	sortPackageJson,
	sortPnpmWorkspace,
	sortTsconfig,
	turnOffs,
	typescript,
	unicorn,
	vue,
	yaml,
} from './configs/index.ts'
import { hasTypeScript, hasVue, isInEditorEnv } from './utils.ts'

export type Options = {
	/**
	 * set to `true` if a repo is in the process of migration
	 * @deprecated will be removed
	 * @default `false`
	 */
	migrate?: boolean
	/** @default false */
	typescript?: boolean
	/** Vue */
	vue?: boolean
	/** Prettier. `true` by default. */
	prettier?: boolean
	/** Optional: JSONC support. `false` by default. */
	jsonc?: boolean
	/** Optional yaml support */
	yaml?: boolean
	/** Optional markdown support */
	markdown?: boolean
	/** Optional svelte support */
	svelte?: boolean
	/** Optional astro support */
	astro?: boolean
}

/**
 * `@audiolab` ESLint config.
 * @param {Options} options
 *  The options for generating the ESLint configurations.
 * @param {Awaitable<Config | Config[]>[]} userConfigs
 *  The user configurations to be merged with the generated configurations.
 * @returns {FlatConfigComposer<Config, ConfigNames>}
 *  The merged ESLint configurations.
 */
export function audiolab(
	options: Options = {},
	...userConfigs: Awaitable<Arrayable<Config> | FlatConfigComposer<any, any> | Linter.Config[]>[]
): FlatConfigComposer<Config, ConfigNames> {
	const {
		astro: _enableAstro = false,
		jsonc: enableJSONC = true,
		markdown: enableMarkdown = false,
		migrate = false,
		prettier: enablePrettier = true,
		svelte: _enableSvelte = false,
		typescript: enableTypescript = hasTypeScript(),
		vue: enableVue = hasVue(),
		yaml: enableYaml = false,
	} = options
	const isStrict: boolean = migrate === false
	const configs: Awaitable<Config[]>[] = []
	configs.push(
		// Basic JavaScript
		// includes files from `.gitignore`
		ignores(),
		javascript({ isInEditor: isInEditorEnv(), strict: isStrict }),
		comments(),
		imports(),
		unicorn(),
		node(),

		jsdoc(),
		regexp(),
		deMorgan()
	)

	if (enableTypescript) {
		configs.push(typescript())
	}

	configs.push(sortImports(), unicorn(), security(), sonarjs())

	if (enablePrettier) {
		configs.push(prettier())
	}

	if (enableVue) {
		configs.push(vue({ a11y: isStrict, strict: isStrict, typescript: enableTypescript }))
	}

	if (enableJSONC) {
		configs.push(jsonc(), sortPackageJson(), sortTsconfig())
	}

	if (enableYaml) {
		configs.push(yaml(), sortPnpmWorkspace())
	}

	if (enableMarkdown) {
		configs.push(markdown())
	}

	configs.push(turnOffs())

	const composer = new FlatConfigComposer<Config, ConfigNames>(...configs, ...(userConfigs as any))

	if (isInEditorEnv()) {
		composer.disableRulesFix(['unused-imports/no-unused-imports', 'test/no-only-tests', 'prefer-const'], {
			builtinRules: () => import(['eslint', 'use-at-your-own-risk'].join('/')).then((r) => r.builtinRules),
		})
	}

	return composer
}
