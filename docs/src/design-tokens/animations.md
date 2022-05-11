# Animations

This animation file handles all the animations and transitions you are going to use on your website.It organize all your timing, easing, and transitions into maps.


### Time and Ease

You can setup your timing and easing palettes, with the standard Accoutrement syntax and can be used globally.

``` scss
$times: (
  'fast': 300ms,
  'slow': 500ms
);

$easing: (
  'in': ease-in,
  'out': ease-out,
  'elastic': cubic-bezier(0.5, -0.4, 0.5, 1.4),
);
```

You can access them anywhere globally on your project.

``` scss
.example {
  animation: slide-in time('fast') ease('in');
  transition-delay: time('fast');
  transition-duration: time('slow');
  transition-timing-function: ease('elastic');
}
```

### Transitions & Animations

We can use timing and easing variables/patterns to create a mixin type or called **changes** for transitions and animations.

``` scss
$changes: (
  'fade': opacity time('fast') ease('out'),
  'fade-hide': (
    '#fade',
    visibility time('fast') ease('out')
  ),
  'slide': transform time('fast')
);
```

Access them simply or by using mixin:

<code-group>
  <code-block title="SCSS">
  ``` scss
.example {
    animation: change('fade');
    transition: change('slide');
}
  ```
  </code-block>

  <code-block title="MIXIN">
  ```scss
.example {
    @include animate('fade');
    @include transition('slide');
}
  ```
  </code-block>
</code-group>

### Times

Since CSS variables are often defined in a global space, it can be useful to prefix different variable types. Set a prefix for all time-tokens, and we’ll apply it when setting or calling CSS variables based on your time maps. Set to null or '' (empty string) for no prefix.

<code-group>
  <code-block title="SCSS">
  ``` scss
tools.$times: ('my-time': 1s);
tools.$time-var-prefix: 'prefix_';
html { 
    @include tools.time--('my-time') 
}
  ```
  </code-block>

  <code-block title="CSS- Compiled">
  ```css
html {
  --prefix_my-time: 1s;
}
  ```
  </code-block>
</code-group>