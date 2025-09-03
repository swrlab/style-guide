import { defineConfig } from 'tsdown'

export default defineConfig({
	entry: {
		biome: 'biome/biome.json',
		eslint: 'eslint/index.js',
		prettier: 'prettier/index.js',
	},
})
