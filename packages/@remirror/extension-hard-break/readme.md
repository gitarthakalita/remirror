# @remirror/extension-hard-break

> Add `br` tags to your editor.

[![Version][version]][npm] [![Weekly Downloads][downloads-badge]][npm] [![Bundled size][size-badge]][size] [![Typed Codebase][typescript]](#) [![MIT License][license]](#)

[version]: https://flat.badgen.net/npm/v/@remirror/extension-hard-break/next
[npm]: https://npmjs.com/package/@remirror/extension-hard-break/v/next
[license]: https://flat.badgen.net/badge/license/MIT/purple
[size]: https://bundlephobia.com/result?p=@remirror/extension-hard-break@next
[size-badge]: https://flat.badgen.net/bundlephobia/minzip/@remirror/extension-hard-break@next
[typescript]: https://flat.badgen.net/badge/icon/TypeScript?icon=typescript&label
[downloads-badge]: https://badgen.net/npm/dw/@remirror/extension-hard-break/red?icon=npm

## Installation

```bash
# yarn
yarn add @remirror/extension-hard-break@next @remirror/pm@next

# pnpm
pnpm add @remirror/extension-hard-break@next @remirror/pm@next

# npm
npm install @remirror/extension-hard-break@next @remirror/pm@next
```

This is included by default when you install the recommended `remirror` package. All exports are also available via the entry-point, `remirror/extension/hard-break`.

## Usage

The following code creates an instance of this extension.

```ts
import { HardBreakExtension } from 'remirror/extension/hard-break';

const extension = new HardBreakExtension();
```
