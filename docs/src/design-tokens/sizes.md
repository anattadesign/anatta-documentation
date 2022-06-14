# Sizes

Sass size & scale management tools:

### Set Your Sizes

- Gather all your sizes into a single map
- Generate new sizes based on <a href="https://www.oddbird.net/accoutrement/docs/scale">modular scales</a> or arbitrary functions
- Convert between relative units
- Access sizes on the fly


``` scss
$ratios: (
  'ratio': 0.25,
);

$sizes: (
  'root': 16px,
  'gutter': 15px,

  // default spacings for paddings and margins.
  'large': '#root' ('times': 3),
  'medium': '#root' ('times': 2),
  'small': '#root' ('times': 1),

  // reference existing sizes
  'text': '#root',

  'h1': '#root' ('times': 4),
  'h2': '#root' ('times': 3.5),
  'h3': '#root' ('times': 3),
  'h4': '#root' ('times': 2.5),
  'h5': '#root' ('times': 2),
  'h6': '#root' ('times': 1.5),

  // Page Responsive sizes
  // =====================
  'page': 20rem,                                // 320px (Mobile, landscape)
  'page-mobile-medium': 23rem,                  // 375px (Mobile, Latest)
  'page-mobile-large': '#page' ('times': 2),     // 640px (Mobile, landscape)
  'page-tablet': '#page' ('times': 2.4),        // 768px (Tablet, portrait)
  'page-tablet-large': '#page' ('times': 3.2),  // 1024px (Tablet, landscape)
  'page-desktop': '#page' ('times': 4.26875),   // 1366px (HD laptops (768p))
  'page-desktop-medium': 90rem,                 // 1440px (Desktop displays)
  'page-desktop-large': 105rem                  // 1680px (Desktop displays)
);

```

<div class="block-space"></div>

------


**Import one font at a time with font-face() or all your local webfonts with import-webfonts():**

``` scss
 // Import one font by configuration key
 @include font-face('body');

 // Import all local fonts
 @include import-webfonts;
```

<div class="block-space"></div>

------

**Include typography.scss file in design tokens's index file alongside other tokens:**

```scss
// THIS FILE IS IMPORTED IN EVERY COMPONENT as '@design'.
// DO NOT INCLUDE CODE WHICH GENERATES CSS.

/// Utility library which makes defining and accessing token very easy.
/// @link https://www.oddbird.net/accoutrement/docs/
@import '~accoutrement/sass/tools';

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

------


``` scss
 // Import one font by configuration key
 @include font-face('body');

 // Import all local fonts
 @include import-webfonts;
```

<div class="block-space"></div>

------


**Usage:**

``` scss
.example {
width: size('page', 'px');
}
```