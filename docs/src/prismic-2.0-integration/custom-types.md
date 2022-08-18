# Custom Types

Custom types refers to the template for each of the document created in prismic, which contains the slices aka components. 
<a class="green-link" href="../common-terms-and-code-snippets/custom-types.html">Learn more about custom types here </a>


## Learn how to create custom types with JSON

::: details Create custom type with JSON
<div class="block-space"></div>
<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/e5d93b01a09c4653b69dbc6cb9efa770" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
:::

---- 

<div class="block-space"></div>

### Prismic 2.0 supports following type :

## Pages 
This type is used for creating the landing pages, documents created with this type will create a actual page on shopify.

::: details JSON with the required fields
<div class="block-space"></div>

 ```
 {
	"Main": {
		"page_title": {
			"type": "StructuredText",
			"config": {
				"single": "heading1,heading2,heading3,heading4,heading5,heading6",
				"label": "Title",
				"placeholder": "Page Title"
			}
		},
		"uid": {
			"type": "UID",
			"config": {
				"label": "Slug",
				"placeholder": "Slug"
			}
		},
		"type": {
			"type": "Select",
			"config": {
				"options": ["page"],
				"default_value": "page",
				"label": "Type"
			}
		},
		"body": {
			"type": "Slices",
			"fieldset": "Slice zone",
			"config": {
				"labels": null,
				"choices": {}
			}
		}
	}
}

```
:::

<div class="block-space"></div>

----

## Collection

Documents created with this type will directly sync metafield with the collection, we will need the collection id as a required field.

::: details JSON with the required fields
<div class="block-space"></div>

 ```
{
	"Main": {
		"ids": {
			"type": "Text",
			"config": {
				"label": "Ids"
			}
		},
		"type": {
			"type": "Select",
			"config": {
				"options": ["collection"],
				"default_value": "collection",
				"label": "Type"
			}
		},
		"body": {
			"type": "Slices",
			"fieldset": "Slice zone",
			"config": {
				"labels": null,
				"choices": {}
			}
		}
	}
}

```
:::

<div class="block-space"></div>

----

## Product

Similar to collection, document created with product type syncs all the data to its product's metafield instead of creating a new page. We'll need product id from shopify side.

::: details JSON with the required fields
<div class="block-space"></div>

 ```
{
	"Main": {
		"ids": {
			"type": "Text",
			"config": {
				"label": "Ids"
			}
		},
		"type": {
			"type": "Select",
			"config": {
				"options": ["product"],
				"default_value": "product",
				"label": "Type"
			}
		},
		"body": {
			"type": "Slices",
			"fieldset": "Slice zone",
			"config": {
				"labels": {},
				"choices": {}
			}
		}
	}
}

```
:::

## Blog

Documents created with the type of blog with add the new blog category in prismic. 

::: details JSON with the required fields
<div class="block-space"></div>

 ```
{
	"Main": {
		"title": {
			"type": "Text",
			"config": {
				"label": "Title"
			}
		},
		"uid": {
			"type": "UID",
			"config": {
				"label": "Slug",
				"placeholder": "slug"
			}
		},
		"type": {
			"type": "Select",
			"config": {
				"options": ["blog"],
				"default_value": "blog",
				"label": "Type"
			}
		},
		"body": {
			"type": "Slices",
			"fieldset": "Slice zone",
			"config": {
				"labels": {},
				"choices": {}
			}
		}
	}
}

```
:::

## Article

Documents created with the type of article with add the new article within the specific blog category. So we'll need blog id to create a new article.

::: warning 
Once a article been assigned to a specific blog id, it cant be updated later on.
:::

::: details JSON with the required fields
<div class="block-space"></div>

 ```
{
	"Main": {
		"title": {
			"type": "Text",
			"config": {
				"label": "Title"
			}
		},
		"uid": {
			"type": "UID",
			"config": {
				"label": "Slug",
				"placeholder": "Slug"
			}
		},
		"parent": {
			"type": "Text",
			"config": {
				"label": "Blog Id"
			}
		},
		"type": {
			"type": "Select",
			"config": {
				"options": ["article"],
				"default_value": "article",
				"label": "Type"
			}
		},
		"body": {
			"type": "Slices",
			"fieldset": "Slice zone",
			"config": {
				"labels": {},
				"choices": {}
			}
		}
	}
}

```
:::