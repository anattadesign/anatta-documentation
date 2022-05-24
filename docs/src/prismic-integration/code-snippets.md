# Code Snippets

## Fetch content of a repeated-zone

Fetching content through the repeated zone might get tricky. That's because, 
Each placeholder aka, metafields key on repeated-zone is saved with metafields with  ```_{index number}```

 **Full Code**

```
snippets/test-slice.liquid

<!-- fetch metafields based on namespace(slice_test) -->
{% assign section = metafields[module] %} 

<! -- fetch total number of repetable items based on namespace -->
{%- assign length = section.count | minus: 1 -%}

<!-- Render data -->
<div class="item__list">
   <!--  Loop within the total count  -->
    {% for index in (0..length) %}
       <!-- Generate metafields key -->
        {%- assign title = 'block_title_' | append: index -%} 
        {%- assign description = 'block_description_' | append: index -%}
       <div class="item__single">
         <h2 class="item__title">{{section[title]}}</h2> 
         <p class="item__text">{{section[description]}}</p>
       </div>
    {% endfor %}
</div>
```

:::tip 
Want to learn more about this code ? <a href="./code-snippets/fetch-repeated-items.html" class="green-link">Learn more</a>
::: 
<div class="block-space"></div>

---- 

## LazyLoading Images

Existing Lazyloading snippet might not work with prismic because of the cdn url it gives.
The CDN url for images provided by prismic offers fetching of images of different resolutions by using 
```&w``` suffix.

::: danger 
We are using <a href="https://www.npmjs.com/package/lazysizes">***lazysizes***</a> plugin for lazyloading images. So check **package.json** if its installed.
:::

<div class="block-space"></div>

----

**Full Code**

<SourceCode>
<<< @/src/source-files/lazy-images.liquid
</SourceCode>
<div class="block-space"></div>

----

<SourceCode>
<<< @/src/source-files/responsive-image.liquid
</SourceCode>
<div class="block-space"></div>

----


**Example**
```
{% render 'prismic-responsive-image', image: section.desktop_image, aspect_ratio: aspect_ratio %}

{% comment %}Aspect ratio is optional here {% endcomment %}
```


<div class="block-space"></div>

----


**Options Provided**

**image**  
This accepts object image object that prismic saves as a metafield.

**aspectRatio**  
It defines the the **width/height** ratio of an image.   
If value is **more than 1**, it means image have **more width than height**.  
If **less than 1** , it means image have **more height than width.**  

<div class="block-space"></div>

----

<div class="block-space"></div>

## JSON output for non-repeatable zone

Well this is preety straight forward. Hope i didn't kill your hype. :P 

Ok, so create a new snippet. 


```
snippets > json-output-{namespace}.liquid

{%- assign namespace = 'namespace-name' -%}
{% assign page_handle = 'page-handle' %}
{% assign section = pages[page_handle].metafields %}
{% assign block_content = section[namespace] %}
{%- assign length = block_content.count | minus: 1 -%}
{% assign title = section['title'] %}

[
 {
     "title": "{{title}}"
 }
]
```
<div class="block-space"></div>

----

<div class="block-space"></div>


## JSON output for repeatable zone


```
snippets > json-output-{namespace}.liquid

{%- assign namespace = 'namespace-name' -%}
{% assign page_handle = 'page-handle' %}
{% assign section = pages[page_handle].metafields %}
{% assign block_content = section[namespace] %}
{%- assign length = block_content.count | minus: 1 -%}


[
{% for index in (0..length) %}
 {% assign title = 'title_' | append: index %}
 {
     "title" : "{{title}}"
 }
 {% unless forloop.last %}
 ,
 {% endunless %}
{% endfor %}
]
```

<div class="block-space"></div>

----


## JSON Usage Example 

```
templates > Collection.liquid

<script>
{
  "data": {% render "json-output-{namespace}" %}
}
</script>
```

:::tip 
You can pass the required variable like namespace or page handle directly into the snippet.   
This is just a basic implementation.
:::