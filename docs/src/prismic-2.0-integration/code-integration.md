# Code Integration

## Render Prismic Slices

<SourceCode>
<<< @/src/source-files/render-slices.liquid
</SourceCode>


<div class="block-space"></div>

----

**Example**

```
templates/prismic.page.liquid

{% assign metafields = page.metafields %}
{% include 'render-slices', metafields: metafields %}

```

<div class="block-space"></div>

----

## Render Slice Limitation And Workaround


Render slices snippet will load all the snippet based on the order , what if we want to load these snippet in different order or we want
to fill some section that is not from prismic in between these section. 

That's the motivation for creating ```render-single-slice``` and ```render-excluding-slices``` snippet. 

You can use ```render-slice-slice``` to render a particular slice from any page or collection or product metafield as long as you have access to that metafields. 

And you can use ```render-excluding-slices```  to render all the slices except from the mentioned one. 

Now the possibility is endless on how and where you can use these prismic slices or components.


<div class="block-space"></div>

----


## Render Single Slice (Repeated instance supported)

<SourceCode>
<<< @/src/source-files/render-single-slice.liquid
</SourceCode>

**Example**

```

templates/collection.liquid 

{% assign page_all_meta = pages['shop-all'].metafields %}

// use prismic slice name (handelized) as slice_key  

{%- assign promo_landing_key = 'promo_bar_landing' -%}

 {% include 'render-single-slice', slice_key: promo_landing_key , metafields: page_all_meta %}


  // This look for the namespace promo_bar , in global page's metafields.   
  // So make sure that your global page's handle is "global" ,   
  // and the snippet name matches the namespace name 

```

<div class="block-space"></div>

----

## Render Excluding slices (render all slices except the mentioned one)

<SourceCode>
<<< @/src/source-files/render-excluding-slices.liquid
</SourceCode>

**Example**

```

templates/collection.liquid 

{% assign page_all_meta = pages['shop-all'].metafields %}

// use prismic slice name (handelized) as slice_key  

{%- assign promo_landing_key = 'promo_bar_landing' -%}

 {% include 'render-single-slice', slice_key: promo_landing_key , metafields: page_all_meta %}


  // This look for the namespace promo_bar , in global page's metafields.   
  // So make sure that your global page's handle is "global" ,   
  // and the snippet name matches the namespace name 

```

<div class="block-space"></div>

----




