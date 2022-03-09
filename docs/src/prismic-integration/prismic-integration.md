# What is Prismic Integration
As there is no official integration for prismic in shopify platform, we use prismic events/hooks to trigger modification or creation of page and its metafields for the integration.

All of these fun stuffs are taken care by backend.

### Common Prismic Terminology
**Custom Types:**
Each document(pages) created through prismic should have a template. Custom Types serve as the template for these documents.

<a href="./custom-types.md" class="green-link" style="display: block;margin-top:-5px">Add a new custom type +</a>


**Slices:**
Slices serves as a component. A component is a collection of elements/placeholder grouped together. It can be shared across the custom types.

<a href="./slices.html" class="green-link" style="display: block;margin-top:-5px">Add a new slice +</a>


**Elements:**
Elements acts as a placeholder. There are predefined elements that we can use to create data placeholders.

<a href="custom-types.md" class="green-link" style="display: block;margin-top:-5px">Add a new placeholder +</a>

:::warning Note
We will be refering elements as placeholder
:::