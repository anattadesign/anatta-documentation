# How Does It Work ?
All the magic happens inside webpack.cofig.js

Lets talk about few of the important components 
<div class="block-space"></div>

## Entry points

Similar to shopify the entry points for build is 

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

Each of these entry point consist of imported js and css file for that particular template or layout.

<div class="block-space"></div>

## Generate css bundles

Whenever there is a **css/scss** imported in template files including child imports, it create a **seperate css bundle** with the **filename of imported css/scss**

<div class="block-space"></div>

## Liquid files and static assets

All of the **liquid files and static content** are directly **copied to the folder specified by shopify**.

<div class="block-space"></div>

## How does it map with shopify ? 

We use shopify snippet to load the layout and template bundled based on the current loaded template and layouts.

```
//theme.liquid

<head>
...

  {% render 'style-bundle', layout: 'theme' %}
</head>

<body>
...

  {% render 'script-bundle', layout: 'theme' %}
</body>
```


```
//style-bundle.liquid

{% capture layout_bundle_styles %}bundle.{{- layout -}}.css{% endcapture %}
{{ layout_bundle_styles | asset_url | stylesheet_tag }}

{% if template %}
  {% capture style_bundle %}bundle.{{- template | remove: 'customers/' -}}.css{% endcapture %}
  {{ style_bundle | asset_url | stylesheet_tag }}
{% endif %}
```

```
//script-bundle.liquid

<!-- Vendor Modules -->
{% capture vendor_bundle %}bundle.vendors.js{% endcapture %}
{{ vendor_bundle | asset_url | script_tag }}

<!--Common Modules-->
{% capture common_bundle %}bundle.common.js{% endcapture %}
{{ common_bundle | asset_url | script_tag }}

<!--Layout Modules-->
{% capture layout_bundle_js %}bundle.{{- layout -}}.js{% endcapture %}
{{ layout_bundle_js | asset_url | script_tag }}

<!--Template Modules-->
{% if template %}
  {% capture script_bundle %}bundle.{{- template | remove: 'customers/' -}}.js{% endcapture %}
  {{ script_bundle | asset_url | script_tag }}
{% endif %}
```

