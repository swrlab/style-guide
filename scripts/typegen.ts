import type { Config } from '../src/eslint/types.ts'
import { writeFile } from 'node:fs/promises'
import { styleText } from 'node:util'
import { flatConfigsToRulesDTS } from 'eslint-typegen/core'
import { builtinRules } from 'eslint/use-at-your-own-risk'
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
	turnOffs,
	typescript,
	unicorn,
	vue,
	yaml,
} from '../src/eslint/configs/index.ts'

const configs: Config[] = [
	...ignores(),
	...javascript({ strict: true }),
	...comments(),
	...imports(),
	...unicorn(),
	...node(),
	...deMorgan(),
	...regexp(),
	...prettier(),
	...typescript(),
	{
		plugins: { '': { rules: Object.fromEntries(builtinRules) } },
	},
	...security(),
	...sonarjs(),
	...sortImports(),
	...unicorn(),
	...vue({ a11y: true, strict: true }),
	...jsonc(),
	...jsdoc(),

	...yaml(),
	...turnOffs(),
	...markdown(),
].flat()

let dts = await flatConfigsToRulesDTS(configs, {
	includeAugmentation: false,
})

const configNames = configs.map((i) => i.name).filter(Boolean) as string[]
dts += `
// Names of all the configs
export type ConfigNames = ${configNames.map((i) => `'${i}'`).join(' | ')}
`

await writeFile('src/eslint/types.generated.d.ts', dts)

console.info(styleText('green', 'Type definitions generated!'))
