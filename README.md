<h1 align="center">SWR Audio Lab Style Guide</h1>

<div align="center">

[![license](https://img.shields.io/github/license/swrlab/style-guide?label=license)](https://github.com/swrlab/style-guide/blob/main/LICENSE)
[![version](https://img.shields.io/npm/v/@swrlab/style-guide)](https://www.npmjs.com/package/swrlab/style-guide)

</div>

## Introduction

This repository is the home of an based on Vercel's style guide, which includes configs for
popular linting and styling tools.

The following configs are available, and are designed to be used together.

- [Prettier](#prettier)
- [ESLint](#eslint)
- [Biome](#biome)

## Installation

All of our configs are contained in one package, `@swrlab/style-guide`. To install:

```sh
# If you use Bun
bun add --dev @swrlab/style-guide

# If you use Yarn
yarn add --dev @swrlab/style-guide

# If you use npm
npm i --save-dev @swrlab/style-guide

# If you use pmpm
pnpm i --save-dev @swrlab/style-guide

```

Some of our ESLint configs require peer dependencies. We'll note those
alongside the available configs in the [ESLint](#eslint) section.

## Prettier

> Note: Prettier is a peer-dependency of this package, and should be installed
> at the root of your project.
>
> See: https://prettier.io/docs/en/install.html

To use the shared Prettier config, set the following in `package.json`.

```json
{
  "prettier": "@swrlab/style-guide/prettier"
}
```

## ESLint

> Note: ESLint is a peer-dependency of this package, and should be installed
> at the root of your project.
>
> See: https://eslint.org/docs/user-guide/getting-started#installation-and-usage

Usage:

```js
// eslint.config.mjs
import { audiolab } from '@swrlab/style-guide/eslint/presets.js'

export default audiolab(
  [
    /* your custom ESLint config */
  ],
  {
    prettier: true,
    vue: true,
  }
)
```

### Development

For development and testing of the rules you can use:

```bash
npx @eslint/config-inspector@latest
```

### Presets

You can also import and compose individual presets. However, it is recommended that you use the factory function above.

```js
// eslint.config.js
import { presetAll, presetBasic } from '@swrlab/style-guide/eslint/presets.js'

export default presetBasic
```

## Biome

To use the shared Biome config, set the following in `biome.json`:

```json
{
  "extends": ["@swrlab/style-guide/biome"]
}
```

## Credits

This config is inspired by the work of [The Vercel Style Guide](https://github.com/vercel/style-guide) and is further
based on

- https://github.com/antfu/eslint-config
- https://github.com/sxzz/eslint-config

## Contributing

After cloning, you can run `bun install` (or `npm install`) to install the npm dependencies.

## License

ISC
