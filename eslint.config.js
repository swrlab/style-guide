import { audiolab } from './eslint/presets.js'

export default audiolab(
	[
		{
			rules: {
				'import/extensions': ['error', 'ignorePackages'],
			},
		},
	],
	{
		prettier: false,
		comments: true,
		vue: true,
		typescript: true,
	}
)
