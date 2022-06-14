# Design Tokens

Design tokens provide a robust design systems that require meaningful, readable, reusable code. These Sass utilities are designed to help define and manage your design tokens (colors, fonts, sizes, etc.).

## Folder Structure
All these design token files reside inside a design token folder in shopify shell.
<div class="block-space"></div>

```
├── assets
├── config
├── design-tokens
│   ├── _animation.scss
│   ├── _colors.scss
│   ├── _helper-mixins.scss
│   ├── _layouts.scss
│   ├── _sizes.scss
│   ├── _typography.scss
│   ├── _z-index.scss
│   └── index.scss
│ 
├── js / bundles
├── liquid
├── locales
└── styles
```
<div class="block-space"></div>

## Implementation

All these design token files are included in index.scss file in design token folder.

``` scss
// src/design-tokens/index.scss

@import '~accoutrement/sass/tools';

// Configuration
$can-use-css-variables: false !default;

// Basic Tokens
@import 'colors';
@import 'sizes';
@import 'typography';
@import 'layouts';
@import 'animation';
@import 'z-index';
@import 'helper-mixins';
```
<div class="block-space"></div>

## How to include ?

As our design token setup/files are ready now you just need to import it in any of your scss files or scss components.

``` scss
//src/styles/templates/product.scss

// Design tokens
@import "./src/design-tokens/index";

```