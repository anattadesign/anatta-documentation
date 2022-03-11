# Markdown Syntax :100:
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
## Details

::: details Browser
This is a details block, which does not work in IE / Edge
:::

## Tip
::: tip Info
  Tip Info
:::

## Warning
::: warning Aware
  Warning info
:::

## Danger
::: danger Stop
 important info
:::

::: details Click me to view the code
```js
console.log('Hello, Anatta!')
```
:::

## Dot List
- first
- second
- third

## Number List
1. ABC
2. XYZ

## Text Linking
[Prismic](http://localhost:8080/prismic-adaptor-integration/prismic/)

## Horizontal break line

"----" 
*without the double quotes

## Bold Text
 ** text here **
 (avoid space between text and **)

## Add Language based code
``` js
  function helloJs() {
    console.log("Hello JS");
  }
```
## Line Highlighting in Code Blocks
``` html{4}
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>
```
## Block with a backgrond
    Hello background block

## Import Code Snippets

<SourceCode>
<<< @/src/example-code.liquid
</SourceCode>

## Escaping

::: v-pre
`{{ This will be displayed as-is }}`
:::

## Tables

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
