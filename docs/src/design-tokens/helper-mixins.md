# Helper Mixins

Basically helper mixins are the mixins we can use in design token to minimise the code and can be used just like user defined functions with some parameters.

## Define a mixin

You can define/create your own mixin in helper-mixin file and use globally. Let us take example of a padding mixin and its usage to add padding on an element.

## Padding

Add padding to the element

``` scss
@mixin padding($top: null, $right: null, $bottom: null, $left: null) {
  padding-top: $top;
  padding-right: $right;
  padding-bottom: $bottom;
  padding-left: $left;
}
```

**Usage:**

``` scss
.example {
  @include padding(14px, 35px, null, 35px);
}
```
You can pass **null** incase you don't need that parameter/css.

<div class="block-space"></div>

----

## Margin

Add margin to element

``` scss
@mixin margin($top: null, $right: null, $bottom: null, $left: null) {
  @include spacing($type: 'margin', $top: $top, $right: $right, $bottom: $bottom, $left: $left);
}
```

**Usage:**

``` scss
.example {
  @include margin(14px, 35px, null, 35px);
}
```

<div class="block-space"></div>

----

## Strip unit

``` scss
@function stripUnit($value) {
  @return $value / ($value * 0 + 1);
}
```

**Usage:**

``` scss
.example {
  @include stripUnit(14px);
}
```

<div class="block-space"></div>

----

## Px to rem

``` scss
@function rem($pxValue) {
  @return #{stripUnit($pxValue) / stripUnit(size("root"))}rem;
}
```

**Usage:**

``` scss
.example {
  @include rem(14px);
}
```

<div class="block-space"></div>

----

## Position

``` scss
  @mixin position($position, $top: null, $right: null, $bottom: null, $left: null) {
    position: $position;
    top: $top;
    right: $right;
    bottom: $bottom;
    left: $left;
  }
```

**Usage:**

``` scss
.example {
  @include position('absolute',12px,0,10px,0);
}
```