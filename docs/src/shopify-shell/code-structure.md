# Code Structure


:::danger !Important
 Dont miss it 
:::

## Entry points

 The entry points for all js and css resides under template.js.

 :::tip
 Read more about it here: <a class= "underline" href="./how-does-it-work">How It Works ?</a>
 :::
``` 
//Templates entrypoint

src/js/bundles/templates/**/**.js 
// ** is a glob selector for all files

```

``` 
//Layouts entrypoint

src/js/bundles/layouts/**.js 
// ** is a glob selector for all files

```

<div class="block-space"></div>

## Step: 1 : Identify template or layout

Identify template that we are working on, in our case, collection.js.

```
//src/js/bundles/templates/{template_name}.js

src/js/bundles/templates/collection.js
```

If it doesn't exist, 

create a new file called ***collection.js** in mentioned path ,
and import the required dependencies scss like section's or snippet's scss or js.

```
// {template_name}.js
//collection.js

//js and css imports here
@import sectionHello from '../sections/section-hello';

sectionHello();

```

or lazyload it,

```
// {template_name}.js
//collection.js

//js and css imports here

async loadComponent = (componentName,callback = () => {return}) => {
   if(!componentName) {
       return false;
   } 
   const {module:{default: () => return false} = await import(/* webpackChunkName: componentName */ `./${componentName}`)
   default();
   callback();
}

//some event callback
((args) => {
//note that this is a async code, you might want to pass callback
 loadComponent('section-hello');
});

```
<div class="block-space"></div>


## Step: 2 : Create dependency files

Create scss and js if they dont exist that are required for the section that are included in that particular template or basically any files that are required
to make this template work.

```
/src/styles/sections/section-hello.scss

h1 {
    color: red;
}

```

```
/src/js/bundles/sections/section-hello.js

@import '~Styles/sections/section-hello.scss;

export default () => {
 console.log("hello");
}

```
<div class="block-space"></div>


## Step: 3 : Confirm changes 
Make changes in scss or js files and see if they are reflected.



