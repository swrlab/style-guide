import { pluginVue } from '../plugins.js'

/** @type {import("eslint-define-config").FlatESLintConfigItem[]} */
export const vue = [...pluginVue.configs['flat/essential']]
