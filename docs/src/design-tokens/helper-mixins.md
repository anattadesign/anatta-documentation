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
    @include padding(14px, 35px, null, 35px);
}
```
You can pass **null** incase you don;t need that parameter/css.

We also use mixin to convert pixels to rem unit in our project, like this:

``` scss
@function stripUnit($value) {
  @return $value / ($value * 0 + 1);
}

@function rem($pxValue) {
  @return #{stripUnit($pxValue) / stripUnit(size("root"))}rem;
}
```

So now you can use it like :

``` scss
.example{
    @include padding(rem(14px), rem(35px), null, rem(35px));
}
```

Apart from padding, you can create your own custom mixins , which can be used frequenty across project like for margin, border, display flex, font styling etc.

<div class="block-space"></div>

----

**Full Code for different mixins we use generally:**

<SourceCode>
<<< @/src/source-files/helper-mixins.scss
</SourceCode>
<div class="block-space"></div>