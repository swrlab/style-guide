import type { Config } from '../types.ts'
import { GLOB_MARKDOWN, GLOB_SRC, GLOB_SRC_EXT } from '../constants.ts'
import { pluginImport } from '../plugins.ts'

// TODO: iterate on config
export const turnOffs = (options: { migrate?: boolean } = {}): Config[] => [
	...(options.migrate
		? ([
				{
					name: 'weiland/disables/migrate',
					rules: {
						'vue/html-self-closing': 'off',
					},
				},
			] as Config[])
		: []),
	{
		files: ['**/scripts/*', '**/cli.*', '**/bin/*'],
		name: 'weiland/special/cli',
		rules: {
			'no-console': 'off',
		},
	},
	{
		files: [`**/*.{test,spec}.${GLOB_SRC_EXT}`],
		name: 'weiland/special/tests',
		rules: {
			'no-unused-expressions': 'off',
			'unicorn/consistent-function-scoping': 'off',
		},
	},
	{
		files: [
			`**/*config*.${GLOB_SRC_EXT}`,
			`**/{views,pages,routes,middleware,plugins,api,modules}/${GLOB_SRC}`,
			`**/{index,vite,esbuild,rollup,rolldown,webpack,rspack,farm,unloader}.${GLOB_SRC_EXT}`,
			'**/*.d.ts',
			`${GLOB_MARKDOWN}/**`,
		],
		name: 'weiland/special/allow-default-export',
		plugins: {
			import: pluginImport as any,
		},
		rules: {
			'import/no-default-export': 'off',
		},
	},
	{
		files: ['**/ISSUE_TEMPLATE/**'],
		name: 'weiland/special/github',
		rules: {
			'unicorn/filename-case': 'off',
		},
	},
]
