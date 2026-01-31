import { defineConfig } from 'tsdown'

export default defineConfig({
	entry: {
		index: 'src/index.ts',
		eslint: 'src/eslint/index.ts',
		prettier: 'src/prettier/index.js',
	},
	copy: ['src/biome/biome.json', { from: 'src/biome/biome.json', to: 'dist' }],
})
