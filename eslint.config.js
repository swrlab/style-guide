import { audiolab } from './eslint/presets.js'

export default audiolab(
	[
		{
			ignores: [],
		},
		{
			rules: {
				'import/extensions': ['error', 'ignorePackages'],
			},
		},
	],
	{
		prettier: true,
		comments: true,
		vue: true,
	}
)
