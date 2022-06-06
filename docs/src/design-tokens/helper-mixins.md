# Helper Mixins

Basically helper mixins are the mixins we can use in design token to minimise the code and can be used just like user defined functions with some parameters.

<<<<<<< HEAD
## Define a mixin

You can define/create your own mixin in helper-mixin file and use globally. Let us take example of a padding mixin and its usage to add padding on an element.

## Padding

Add padding to the element

=======
### Define a mixin

You can define/create your own mixin in helper-mixin file and use globally. Let us take example of a padding mixin and its usage to add padding on an element.

>>>>>>> f01968f (Added colors and helper mixins to tokens)
``` scss
@mixin padding($top: null, $right: null, $bottom: null, $left: null) {
  padding-top: $top;
  padding-right: $right;
  padding-bottom: $bottom;
  padding-left: $left;
}
```

<<<<<<< HEAD
**Usage:**

``` scss
.example {
  @include padding(14px, 35px, null, 35px);
=======
Usage:

``` scss
.example{
    @include padding(14px, 35px, null, 35px);
>>>>>>> f01968f (Added colors and helper mixins to tokens)
}
```
You can pass **null** incase you don;t need that parameter/css.

<<<<<<< HEAD
<div class="block-space"></div>

## Strip unit
=======
We also use mixin to convert pixels to rem unit in our project, like this:
>>>>>>> f01968f (Added colors and helper mixins to tokens)

``` scss
@function stripUnit($value) {
  @return $value / ($value * 0 + 1);
}
<<<<<<< HEAD
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
=======

>>>>>>> f01968f (Added colors and helper mixins to tokens)
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

**Full Code for different mixins we use generally:**

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
