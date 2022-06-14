# Typography

Using this we can manage all fonts and fonts face types into a single map, or set of maps and document typography directly in the code.

### Typography Tokens

- Gather all your fonts into a single map
- Access fonts by name
- Automate webfont imports from a CDN, or relative font files
- Also includes helpers for accessibility and pseudo-elements.


``` scss
$font-path: '../fonts/';

$fonts: (
  // describe locally-hosted font files for import and access
  'heading': (
    'name': 'maven',
    'stack': ('helvetica', 'arial', sans-serif),
    'formats': 'woff' 'ttf',
    'normal': 'maven/maven_pro_regular-webfont',
    'bold': 'maven/maven_pro_bold-webfont',
  ),

  // describe CDN fonts for access
  'body': (
    'name': 'Source Sans Pro',
    'stack': ('Helvetica Neue', 'Helvetica', 'Arial', sans-serif),
  ),

  // provide aliases when useful
  'alias': '#body',
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
html {
  @include font-family('body');
}

h1, h2, h3 {
  @include font-family('heading');
}
```