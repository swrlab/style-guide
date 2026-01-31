import { defineConfig } from 'tsdown'

export default defineConfig({
	entry: {
		index: 'src/index.ts',
		eslint: 'src/eslint/index.ts',
		prettier: 'src/prettier/index.js',
	},
	copy: ['src/oxc/.oxfmtrc.json', 'src/oxc/.oxlintrc.json', 'src/biome/biome.json'],
})
