import globals from 'globals'
import { pluginJs } from '../plugins.js'
import { ECMA_VERSION } from '../constants.js'
/**
 * @typedef {import('eslint-define-config').FlatESLintConfigItem} FlatESLintConfigItem
 */

const USE_JSX = true

/**
 * @returns {FlatESLintConfigItem[]}
 */
export const javascript = [
	pluginJs.configs.recommended,
	{
		languageOptions: {
			ecmaVersion: ECMA_VERSION,
			globals: {
				...globals.browser,
				...globals.es2021,
				...globals.node,
				document: 'readonly',
				navigator: 'readonly',
				window: 'readonly',
			},
			parserOptions: {
				ecmaFeatures: {
					jsx: USE_JSX,
				},
				ecmaVersion: ECMA_VERSION,
				sourceType: 'module',
			},
			sourceType: 'module',
		},
		linterOptions: {
			// noInlineConfig: true, // commented out, since we allow inline configs for now
			reportUnusedDisableDirectives: true,
		},
		rules: {
			// Best practises
			/**
			 * Require return statements in array methods callbacks.
			 *
			 * 🚫 Not fixable -https://eslint.org/docs/rules/array-callback-return
			 */
			'array-callback-return': ['error', { allowImplicit: true }],
			/**
			 * Treat `var` statements as if they were block scoped.
			 *
			 * 🚫 Not fixable - https://eslint.org/docs/rules/block-scoped-var
			 */
			'block-scoped-var': 'error',
			/**
			 * Require curly braces for multiline blocks or nested and be consistent.
			 * Disabled for now
			 *
			 * 🔧 Fixable - https://eslint.org/docs/rules/curly
			 */
			// curly: ['warn', 'multi-or-nest', 'consistent'],
			/**
			 * Require default clauses in switch statements to be last (if used).
			 *
			 * 🚫 Not fixable - https://eslint.org/docs/rules/default-case-last
			 */
			'default-case-last': 'error',
			/**
			 * Require triple equals (`===` and `!==`).
			 *
			 * 🔧 Fixable - https://eslint.org/docs/rules/eqeqeq
			 */
			eqeqeq: 'error',
			/**
			 * Require grouped accessor pairs in object literals and classes.
			 *
			 * 🚫 Not fixable - https://eslint.org/docs/rules/grouped-accessor-pairs
			 */
			'grouped-accessor-pairs': 'error',
			/**
			 * Disallow use of `alert()`.
			 *
			 * 🚫 Not fixable - https://eslint.org/docs/rules/no-alert
			 */
			'no-alert': 'error',
			/**
			 * Disallow use of `caller`/`callee`.
			 *
			 * 🚫 Not fixable - https://eslint.org/docs/rules/no-caller
			 */
			'no-caller': 'error',
			/**
			 * Disallow returning value in constructor.
			 *
			 * 🚫 Not fixable - https://eslint.org/docs/rules/no-constructor-return
			 */
			'no-constructor-return': 'error',
			/**
			 * Disallow using an `else` if the `if` block contains a return.
			 *
			 * 🔧 Fixable - https://eslint.org/docs/rules/no-else-return
			 */
			'no-else-return': 'warn',
			/**
			 * Disallow `eval()`.
			 *
			 * 🚫 Not fixable - https://eslint.org/docs/rules/no-eval
			 */
			'no-eval': 'error',
			/**
			 * Disallow extending native objects.
			 *
			 * 🚫 Not fixable - https://eslint.org/docs/rules/no-extend-native
			 */
			'no-extend-native': 'error',
			/**
			 * Disallow unnecessary function binding.
			 *
			 * 🔧 Fixable - https://eslint.org/docs/rules/no-extra-bind
			 */
			'no-extra-bind': 'error',
			/**
			 * Disallow unnecessary labels.
			 *
			 * 🔧 Fixable - https://eslint.org/docs/rules/no-extra-label
			 */
			'no-extra-label': 'error',
			/**
			 * Disallow floating decimals.
			 *
			 * 🔧 Fixable - https://eslint.org/docs/rules/no-floating-decimal
			 */
			'no-floating-decimal': 'error',
			/**
			 * Make people convert types explicitly e.g. `Boolean(foo)` instead of `!!foo`.
			 * For now not enabled.
			 *
			 * 🔧 Partially Fixable - https://eslint.org/docs/rules/no-implicit-coercion
			 */
			'no-implicit-coercion': 'off', // { disallowTemplateShorthand: true, allow: ['!!'] }
			/**
			 * Disallow use of `eval()`-like methods.
			 *
			 * https://eslint.org/docs/rules/no-implied-eval
			 */
			'no-implied-eval': 'error',
			/**
			 * Disallow usage of `__iterator__` property.
			 *
			 * 🚫 Not fixable - https://eslint.org/docs/rules/no-iterator
			 */
			'no-iterator': 'error',
			/**
			 * Disallow use of labels for anything other than loops and switches.
			 *
			 * 🚫 Not fixable - https://eslint.org/docs/rules/no-labels
			 */
			'no-labels': ['error'],
			/**
			 * Disallow unnecessary nested blocks.
			 *
			 * 🚫 Not fixable - https://eslint.org/docs/rules/no-lone-blocks
			 */
			'no-lone-blocks': 'error',
			/**
			 * Disallow `new` for side effects.
			 *
			 * 🚫 Not fixable - https://eslint.org/docs/rules/no-new
			 */
			'no-new': 'error',
			/**
			 * Disallow function constructors.
			 *
			 * 🚫 Not fixable - https://eslint.org/docs/rules/no-new-func
			 */
			'no-new-func': 'error',
			/**
			 * Disallow primitive wrapper instances, such as `new String('foo')`.
			 *
			 * 🚫 Not fixable - https://eslint.org/docs/rules/no-new-wrappers
			 */
			'no-new-wrappers': 'error',
			/**
			 * Disallow use of octal escape sequences in string literals.
			 *
			 * 🚫 Not fixable - https://eslint.org/docs/rules/no-octal-escape
			 */
			'no-octal-escape': 'error',
			/**
			 * Disallow reassignment of function parameters.
			 *
			 * 🚫 Not fixable - https://eslint.org/docs/rules/no-param-reassign
			 */
			'no-param-reassign': 'error',
			/**
			 * Disallow usage of the deprecated `__proto__` property.
			 *
			 * 🚫 Not fixable - https://eslint.org/docs/rules/no-proto
			 */
			'no-proto': 'error',
			/**
			 * Disallow assignment in `return` statement.
			 *
			 * 🚫 Not fixable - https://eslint.org/docs/rules/no-return-assign
			 */
			'no-return-assign': 'error',
			/**
			 * Disallows unnecessary `return await`.
			 *
			 * 🚫 Not fixable - https://eslint.org/docs/rules/no-return-await
			 */
			'no-return-await': 'error',
			/**
			 * Disallow use of `javascript:` urls.
			 *
			 * 🚫 Not fixable - https://eslint.org/docs/rules/no-script-url
			 */
			'no-script-url': 'error',
			/**
			 * Disallow comparisons where both sides are exactly the same.
			 *
			 * 🚫 Not fixable - https://eslint.org/docs/rules/no-self-compare
			 */
			'no-self-compare': 'error',
			/**
			 * Disallow use of comma operator.
			 *
			 * 🚫 Not fixable - https://eslint.org/docs/rules/no-sequences
			 */
			'no-sequences': 'error',
			/**
			 * Disallow unnecessary `.call()` and `.apply()`.
			 *
			 * 🚫 Not fixable - https://eslint.org/docs/rules/no-useless-call
			 */
			'no-useless-call': 'error',
			/**
			 * Disallow unnecessary concatenation of strings.
			 *
			 * 🚫 Not fixable - https://eslint.org/docs/rules/no-useless-concat
			 */
			'no-useless-concat': 'error',
			/**
			 * Disallow redundant return statements.
			 *
			 * 🔧 Fixable - https://eslint.org/docs/rules/no-useless-return
			 */
			'no-useless-return': 'warn',
			/**
			 * Require using named capture groups in regular expressions.
			 * For now off.
			 *
			 * 🚫 Not fixable - https://eslint.org/docs/rules/prefer-named-capture-group
			 */
			'prefer-named-capture-group': 'off',
			/**
			 * Require using Error objects as Promise rejection reasons.
			 *
			 * 🚫 Not fixable - https://eslint.org/docs/rules/prefer-promise-reject-errors
			 */
			'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
			/**
			 * Disallow use of the RegExp constructor in favor of regular expression
			 * literals.
			 *
			 * 🚫 Not fixable - https://eslint.org/docs/rules/prefer-regex-literals
			 */
			'prefer-regex-literals': 'error',
			/**
			 * Disallow "Yoda conditions", ensuring the comparison.
			 *
			 * 🔧 Fixable - https://eslint.org/docs/rules/yoda
			 */
			yoda: 'warn',

			// ES6
			/**
			 * Disallow useless computed property keys.
			 *
			 * 🔧 Fixable - https://eslint.org/docs/rules/no-useless-computed-key
			 */
			'no-useless-computed-key': 'warn',
			/**
			 * Disallow renaming import, export, and destructured assignments to the
			 * same name.
			 *
			 * 🔧 Fixable - https://eslint.org/docs/rules/no-useless-rename
			 */
			'no-useless-rename': 'warn',
			/**
			 * Require `let` or `const` instead of `var`.
			 *
			 * 🔧 Fixable - https://eslint.org/docs/rules/no-var
			 */
			'no-var': 'error',
			/**
			 * Require object literal shorthand syntax.
			 *
			 * 🔧 Fixable - https://eslint.org/docs/rules/object-shorthand
			 */
			'object-shorthand': 'warn',
			/**
			 * Require default to `const` instead of `let`.
			 *
			 * 🔧 Fixable - https://eslint.org/docs/rules/prefer-const
			 */
			'prefer-const': 'warn',
			/**
			 * Disallow parseInt() in favor of binary, octal, and hexadecimal literals.
			 *
			 * 🔧 Fixable - https://eslint.org/docs/rules/prefer-numeric-literals
			 */
			'prefer-numeric-literals': 'error',
			/**
			 * Require using rest parameters instead of `arguments`.
			 *
			 * 🚫 Not fixable - https://eslint.org/docs/rules/prefer-rest-params
			 */
			'prefer-rest-params': 'error',
			/**
			 * Require using spread syntax instead of `.apply()`.
			 *
			 * 🚫 Not fixable - https://eslint.org/docs/rules/prefer-spread
			 */
			'prefer-spread': 'error',
			/**
			 * Require using template literals instead of string concatenation.
			 *
			 * 🔧 Fixable - https://eslint.org/docs/rules/prefer-template
			 */
			'prefer-template': 'warn',
			/**
			 * Require a `Symbol` description.
			 *
			 * 🚫 Not fixable - https://eslint.org/docs/rules/symbol-description
			 */
			'symbol-description': 'error',

			// Stylistic
			/**
			 * Require camel case names.
			 *
			 * 🚫 Not fixable - https://eslint.org/docs/rules/camelcase
			 */
			camelcase: ['error', { allow: ['^UNSAFE_'], ignoreDestructuring: false, properties: 'never' }],
			/**
			 * Require function expressions to have a name.
			 *
			 * 🚫 Not fixable - https://eslint.org/docs/rules/func-names
			 */
			'func-names': ['error', 'as-needed'],
			/**
			 * Require a capital letter for constructors.
			 *
			 * 🚫 Not fixable - https://eslint.org/docs/rules/new-cap
			 */
			'new-cap': ['error', { capIsNew: false }],
			/**
			 * Disallow the omission of parentheses when invoking a constructor with
			 * no arguments.
			 *
			 * 🔧 Fixable - https://eslint.org/docs/rules/new-parens
			 */
			'new-parens': 'warn',
			/**
			 * Disallow use of the Array constructor.
			 *
			 * 🚫 Not fixable - https://eslint.org/docs/rules/no-array-constructor
			 */
			'no-array-constructor': 'error',
			/**
			 * Disallow use of bitwise operators.
			 *
			 * 🚫 Not fixable - https://eslint.org/docs/rules/no-bitwise
			 */
			'no-bitwise': 'error',
			/**
			 * Disallow if as the only statement in an else block.
			 *
			 * 🔧 Fixable - https://eslint.org/docs/rules/no-lonely-if
			 */
			'no-lonely-if': 'warn',
			/**
			 * Disallow use of chained assignment expressions.
			 *
			 * 🚫 Not fixable - https://eslint.org/docs/rules/no-multi-assign
			 */
			'no-multi-assign': ['error'],
			/**
			 * Disallow nested ternary expressions.
			 *
			 * 🚫 Not fixable - https://eslint.org/docs/rules/no-nested-ternary
			 */
			'no-nested-ternary': 'error',
			/**
			 * Disallow ternary operators when simpler alternatives exist.
			 *
			 * 🚫 Not fixable - https://eslint.org/docs/rules/no-unneeded-ternary
			 */
			'no-unneeded-ternary': 'error',
			/**
			 * Require use of an object spread over Object.assign.
			 *
			 * 🔧 Fixable - https://eslint.org/docs/rules/prefer-object-spread
			 */
			'prefer-object-spread': 'warn',

			// Variables
			/**
			 * Require one variable declaration per scope.
			 * Require consecutive let declarations to be a single declaration.
			 *
			 * 🚫 Not fixable - https://eslint.org/docs/rules/one-var
			 */
			'one-var': ['error', { let: 'consecutive' }],
			/**
			 * Disallow labels that share a name with a variable.
			 *
			 * 🚫 Not fixable - https://eslint.org/docs/rules/no-label-var
			 */
			'no-label-var': 'error',
			/**
			 * Disallow initializing variables to `undefined`.
			 *
			 * 🔧 Fixable - https://eslint.org/docs/rules/no-undef-init
			 */
			'no-undef-init': 'warn',
			/**
			 * Disallow unused variables.
			 *
			 * 🚫 Not fixable - https://eslint.org/docs/rules/no-unused-vars
			 */ 'no-unused-vars': [
				'error',
				{
					args: 'after-used',
					argsIgnorePattern: '^_',
					ignoreRestSiblings: false,
					vars: 'all',
					varsIgnorePattern: '^_',
				},
			],

			// Audiolab preferences
		},
	},
]
