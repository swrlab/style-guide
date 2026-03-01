<h1 align="center">SWR Audio Lab Style Guide</h1>

<div align="center">

[![license](https://img.shields.io/github/license/swrlab/style-guide?label=license)](https://github.com/swrlab/style-guide/blob/main/LICENSE)
[![version](https://img.shields.io/npm/v/@swrlab/style-guide)](https://www.npmjs.com/package/swrlab/style-guide)

</div>

## Introduction

This repository is the home of an based on Vercel's style guide, which includes
configs for popular linting and styling tools.

The following configs are available, and are designed to be used together.

- [Prettier](#prettier)
- [ESLint](#eslint)
- [Biome](#biome)

## Installation

All of our configs are contained in one package, `@swrlab/style-guide`. To install:

```sh
bun add --dev @swrlab/style-guide

# or with other package manager:
npm install --save-dev @swrlab/style-guide
yarn add --dev @swrlab/style-guide
pnpm i -D @swrlab/style-guide
```

Some of our ESLint configs require peer dependencies. We'll note those
alongside the available configs in the [ESLint](#eslint) section.

## Prettier

> Note: Prettier is a _peer-dependency_ of this package, and should be installed
> at the root of your project.
>
> See: https://prettier.io/docs/en/install.html

To use the shared Prettier config, create a `prettier.config.js`
or `prettier.config.mjs` if in a non-ESM project with following contents:

```js
import audiolabPrettierConfig from '@swrlab/style-guide/prettier'

/**
 * @see https://prettier.io/docs/configuration
 * @type {import('prettier').Config}
 */
const config = {
  ...audiolabPrettierConfig,
}

export default config
```

Another way is to set the following in `package.json`.

```json
{
  "prettier": "@swrlab/style-guide/prettier"
}
```

## ESLint

> Note: ESLint is a _peer-dependency_ of this package, and should be installed
> at the root of your project.
>
> See: https://eslint.org/docs/user-guide/getting-started#installation-and-usage

Usage:

```js
// eslint.config.mjs
import { audiolab } from '@swrlab/style-guide/eslint'

export default audiolab(
  {
    prettier: true,
    vue: true,
  },
  [
    /* your custom ESLint config */
  ]
)
```

### Development

For development and testing of the rules you can use:

```sh
bun run dev

# or with node:
npm run dev
```

## Biome

To use the shared Biome config, set the following in `biome.json`:

```json
{
  "extends": ["@swrlab/style-guide/biome"]
}
```

## OXC (Oxlint / Oxfmt)

To use the shared Oxc config, for the formatter:

```json
{
  "extends": ["@swrlab/style-guide/.oxfmtrc.json"]
}
```

And for the linting:

```json
{
  "extends": ["@swrlab/style-guide/.oxlintrc.json"]
}
```

## Credits

This config used to be inspired by the work of [The Vercel Style Guide](https://github.com/vercel/style-guide)
and is further based on a mix of:

- https://github.com/antfu/eslint-config
- https://github.com/sxzz/eslint-config

## Contributing

After cloning, you can run `bun install` (or `npm install`) to install the npm dependencies.

## License

ISC
