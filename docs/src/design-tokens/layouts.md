# Layouts

Sass size & scale management tools:

### Set Your Sizes

- If using Accoutrement Scale, you can use the scale syntax for describing size-relationships and adjustments – and even reference $sizes as though they are $breakpoints. Otherwise, the map should contain only valid CSS length values.

<a class= "underline" href="https://www.oddbird.net/accoutrement/docs/layout-queries.html#variable--breakpoints">Read the complete flow here</a>

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

**Usage:**

``` scss
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