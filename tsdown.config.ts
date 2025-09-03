import { defineConfig } from 'tsdown'

export default defineConfig({
	entry: {
		// 'biome.json': 'src/biome/biome.json',
		index: 'src/index.ts',
		eslint: 'src/eslint/index.ts',
		prettier: 'src/prettier/index.js',
		// copies everything from `biome/` to `dist/
		// publicDir: 'src/biome'
	},
	// loader: {
	// 	'.json': 'copy',
	// },
})
