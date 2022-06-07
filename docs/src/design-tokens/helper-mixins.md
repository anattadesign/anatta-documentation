# Helper Mixins

Basically helper mixins are the mixins we can use in design token to minimise the code and can be used just like user defined functions with some parameters.

### Define a mixin

You can define/create your own mixin in helper-mixin file and use globally. Let us take example of a padding mixin and its usage to add padding on an element.

``` scss
@mixin padding($top: null, $right: null, $bottom: null, $left: null) {
  padding-top: $top;
  padding-right: $right;
  padding-bottom: $bottom;
  padding-left: $left;
}
```

Usage:

``` scss
.example{
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
=======
We also use mixin to convert pixels to rem unit in our project, like this:

``` scss
@function stripUnit($value) {
  @return $value / ($value * 0 + 1);
}
@function rem($pxValue) {
  @return #{stripUnit($pxValue) / stripUnit(size("root"))}rem;
}
```

<<<<<<< HEAD
**Usage:**

``` scss
.example {
  @include rem(14px);
}
```

<div class="block-space"></div>

----

## Position

<<<<<<< HEAD
<SourceCode>
<<< @/src/source-files/helper-mixins.scss
</SourceCode>
<div class="block-space"></div>
=======
So now you can use it like :

``` scss
.example{
    @include padding(rem(14px), rem(35px), null, rem(35px));
}
```

Apart from padding, you can create your own custom mixins , which can be used frequenty across project like for margin, border, display flex, font styling etc.
>>>>>>> f01968f (Added colors and helper mixins to tokens)
=======
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
>>>>>>> de12362 (Feature/design tokens (#5))
