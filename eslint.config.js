import { audiolab } from './src/eslint/index.ts'

export default audiolab(
	{
		prettier: true,
		comments: true,
		vue: true,
		typescript: true,
		yaml: true,
	},
	[
		{
			name: 'user-overrides/rules',
			rules: {
				'import/extensions': ['error', 'ignorePackages'],
			},
		},
	]
)
