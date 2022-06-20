# Typography

Using this we can manage all fonts and fonts face types into a single map, or set of maps and document typography directly in the code.

### Typography Tokens

- Gather all your fonts into a single map
- Access fonts by name
- Automate webfont imports from a CDN, or relative font files
- Also includes helpers for accessibility and pseudo-elements.

``` scss
// src/design-tokens/typography.scss

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

----

### Typography Tokens
Import one font at a time with font-face() or all your local webfonts with import-webfonts():

``` scss
// src/styles/components/global/typography.scss

// Import all local fonts
@include import-webfonts;
```

<div class="block-space"></div>

----

You can access them anywhere globally on your project.
**Usage:**
``` scss
// src/styles/templates/product.scss

.product__title {
  @include font-family('heading');
}

```