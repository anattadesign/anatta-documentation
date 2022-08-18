# Code Integration

## Render Prismic Slices

```
snippets/render-slices.liquid

{% assign metafields = page.metafields %}
{% comment %} *** Namespaces *** {% endcomment %}
{% comment %} *** Controller *** {% endcomment %}
{% assign theme_name = theme.name | downcase %}
{% assign priority_key = 'LCB_priority' %}
{% assign snippet_key = 'LCB' %}
{% if theme_name contains 'preview' %}
  {% assign priority_key = 'PCB_priority' %}
  {% assign snippet_key = 'PCB' %}
{% endif %}
{% for priorities in metafields[priority_key] %}
  {% for p in priorities %}
    {%- assign snippet_names = '' -%}
    {% for module in p %}
      {% assign snippet_name = module | replace: '_', '-' %}
      {%- assign enable = metafields[module].enable -%}
      {%- assign min = 1200 -%}
      {%- assign max = 2300 -%}
      {%- assign diff = max | minus: min -%}
      {%- assign random_id = "now" | date: "%N" | modulo: diff | plus: min -%}
      {% comment %} {{snippet_name}} {% endcomment %}
      {%- if module != priority_key and module != 'priority'-%}
        {%- capture slice_data -%}
          <!-- {{ snippet_name }} -->
          {% assign live_snippet = snippet_name | remove: snippet_key %}
          {% if enable %}
            {% include live_snippet, id: random_id %}
          {% endif %}
        {%- endcapture -%}
        {%- if slice_data contains 'Liquid error: Could not find asset snippets' -%}
          {%- assign allSlices = snippet_names | split: ',' -%}
          {% for slice_name in allSlices %}
            {% if snippet_name contains slice_name -%}
              <!-- {{ snippet_name }} -->
              {% assign live_snippet = slice_name | remove: snippet_key %}
              {% if enable %}
                {% include live_snippet, id: random_id %}
              {% endif %}
              {% break %}
            {%- endif -%}
          {%- endfor -%}
        {%- else -%}
          {%- assign snippet_names = snippet_names | append: snippet_name | append: ',' -%}
          {{ slice_data }}
        {%- endif -%}
      {%- endif -%}
    {% endfor %}
  {% endfor %}
{% endfor %}

```

<div class="block-space"></div>

----

**Example**

```
templates/prismic.page.liquid

{% include 'render-slices' %}

```

<div class="block-space"></div>

----

## Render Single Slice from Global

```
snippets/render-global-slice.liquid

{% assign metafields = pages.global.metafields %}
{% comment %} *** Namespaces *** {% endcomment %}
{% comment %} *** Controller *** {% endcomment %}
{% assign theme_name = theme.name | downcase %}
{% assign priority_key = 'LCB_priority' %}
{% assign snippet_key = 'LCB' %}
{% if theme_name contains 'preview' %}
  {% assign priority_key = 'PCB_priority' %}
  {% assign snippet_key = 'PCB' %}
{% endif %}
{% assign snippet_names = '' %}
{% assign module = snippet_name | replace: '-', '_' | prepend: snippet_key %}
{%- assign enable = metafields[module].enable -%}
{%- assign min = 1200 -%}
{%- assign max = 2300 -%}
{%- assign diff = max | minus: min -%}
{%- assign random_id = "now" | date: "%N" | modulo: diff | plus: min -%}
{% comment %} {{snippet_name}} {% endcomment %}
{%- capture slice_data -%}
    <!-- {{ snippet_name }} -->
    {% if enable %}
    {% include snippet_name, id: random_id %}
    {% endif %}
{%- endcapture -%}
{%- if slice_data contains 'Liquid error: Could not find asset snippets' -%}
    {%- assign allSlices = snippet_names | split: ',' -%}
    {% for slice_name in allSlices %}
    {% if snippet_name contains slice_name -%}
        <!-- {{ snippet_name }} -->
        {% if enable %}
        {% include snippet_name, id: random_id  %}
        {% endif %}
        {% break %}
    {%- endif -%}
    {%- endfor -%}
{%- else -%}
    {%- assign snippet_names = snippet_names | append: snippet_name | append: ',' -%}
    {{ slice_data }}
{%- endif -%}

```

**Example**

```

templates/collection.liquid 

{% include 'global-render-slices' , snippet_name:'promo-bar'%}

{% comment %}
    This look for the namespace promo_bar , in global page's metafields.   
    So make sure that your global page's handle is "global" ,   
    and the snippet name matches the namespace name 
{% endcomment %}

```

<div class="block-space"></div>

----


