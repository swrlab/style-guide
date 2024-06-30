import { pluginSecurity } from '../plugins.js'

/** @type {import("eslint-define-config").FlatESLintConfigItem[]} */
// TODO: waiting for https://github.com/eslint-community/eslint-plugin-security/pull/145
// to be merged
export const security = [pluginSecurity.configs.recommended]
