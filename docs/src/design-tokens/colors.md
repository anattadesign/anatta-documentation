# Colors

Using this we can manage colors and palettes.Organize all colors into a single map, or set of maps and document color relationships directly in the code.

### Color Tokens

Here we establish the color palette and define all colors codes with standard token syntax, which are being used on project.

``` scss
$colors: (
    // set explicit colors
    "lightyellow" :#F3DD6D,
    "vividOrange" :#F59E0B,
    "almond"      :#eedac2,
    "brand-pink"  : hsl(330, 85%, 62%),

    // reference existing colors
    'background': '#brand-pink',
    'border': '#vividOrange',

    // make adjustments as needed, using color functions
    'link': '#lightyellow' ('shade': 25%),
);
```

You can access them anywhere globally on your project.

``` scss
.example {
    border-color: color('border');
    color:  color('vividOrange');
}
```

Use color names that define the purpose of the color.

``` scss
$primary-colors: (
  "primary": "#vividOrange"
);

$secondary-colors: (
  "secondary": "#brand-pink"
);

$text-colors: (
  "text": "#primary",
  "link": "#secondary",
  "link-hover": "#primary",
);

$button-colors: (
  "button": "#primary",
  "button-hover": "#white"
);
```

### Multiple Palettes

You can also define your colors in smaller maps, and then add them to the global $colors variable using the add-colors() mixin. Map references using the #tag format will work across maps, once they are both added to the global setting.Merge everything into main **$color** map..

``` scss
@include add-colors(
  $colors,
  $primary-colors,
  $secondary-colors,
  $text-colors,
  $button-colors
);
```
