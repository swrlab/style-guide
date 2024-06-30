import { pluginJsonc } from '../plugins.js'

/** @type {import("eslint-define-config").FlatESLintConfigItem[]} */
export const json = [...pluginJsonc.configs['flat/recommended-with-json']]
