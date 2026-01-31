import process from 'node:process'
import { isPackageExists } from 'local-pkg'

export const hasTypeScript = (): boolean => isPackageExists('typescript')
export const hasVue = (): boolean => isPackageExists('vue') || isPackageExists('nuxt') || isPackageExists('vitepress')

export function isInEditorEnv(): boolean {
	if (process.env.CI) return false
	return Boolean(
		process.env.ZED_ENVIRONMENT ||
		process.env.VSCODE_PID ||
		process.env.VSCODE_CWD ||
		process.env.JETBRAINS_IDE ||
		process.env.VIM ||
		process.env.NVIM
	)
}
