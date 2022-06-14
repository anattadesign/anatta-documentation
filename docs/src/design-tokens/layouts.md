# Layouts

Sass size & scale management tools:

### Set Your Sizes

- Gather all your sizes into a single map
- Generate new sizes based on <a href="https://www.oddbird.net/accoutrement/docs/scale">modular scales</a> or arbitrary functions
- Convert between relative units
- Access sizes on the fly


``` scss
/// Media Breakpoints
/// @link https://www.oddbird.net/accoutrement/docs/layout-queries.html#variable--breakpoints

/// Breakpoint values, adjusted to the proper units
/// @group config-layout
$breakpoints: (
  'mobile': size('page'),
  'mobile-medium': size('page-mobile-medium'),
  'mobile-large': size('page-mobile-large'),
  'tablet': size('page-tablet'),
  'tablet-large': size('page-tablet-large'),
  'desktop': size('page-desktop'),
  'desktop-medium': size('page-desktop-medium'),
  'desktop-large': size('page-desktop-large')
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

**Include layouts.scss file in design tokens's index file alongside other tokens and make sure it is included after sizes as we are using sizes in it.:**

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


**Usage:**

``` scss
/// Available Mixins
/// @link:https://www.oddbird.net/accoutrement/docs/layout-queries.html#mixin--below

.example {
  @include above('mobile'){
    color: #fff;  
  }
  @include below('mobile'){
    color: #000;
  }
}
 

```