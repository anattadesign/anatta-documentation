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

**Example**
```
{% include 'lazyimage', imageData:section['placeholder_id'], prismic: true, fit: "fill", noscript: true, aspectRatio: aspectRatio %}
```

<div class="block-space"></div>

----


**Options Provided**

**imageData**  
This accepts object image file that prismic saves as a metafield.

**prismic**
If true, this will look for **url** key instead of **src** , because prismic image object consists image url in key of **url** instead of common key, **src**. 

**fit**
***Options***: 
- "fit" : 
 This will crop the image, if image resolution is higher than container. 
 Image wont expand to fill the space, if  image resolution is lower than container.

- "fill"
  This will sqeeze the image , if image resolution is higher than container.
  Image will expand to fill the container if image resolution is lower than the container.

**aspectRatio**  
It defines the the **height/width** ratio of an image.   
If value is **more than 1**, it means image have **more height than width**.  
If **less than 1** , it means image have **more width than height.**  

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