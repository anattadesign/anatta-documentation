# Development Guide

# Directory structure Docs :book:

```
├──docs
│  ├── deploy.sh
│  ├── package.json
│  ├── src
│  │   ├── public
│  │   │   ├── image1.png
│  │   │   └── image2.png
│  │   ├── .vuepress
│  │   │   ├── Components
│  │   │   │   ├── ABC.vue
│  │   │   │   ├── Anchor.vue
│  │   │   │   └── index.js
│  │   │   ├── Public
│  │   │   │   ├── image1.png
│  │   │   │   └── image2.png
│  │   │   ├── styles
│  │   │   │   ├── abc.css
│  │   │   │   └── xyz.css
│  │   │   ├── config.js
│  │   │   ├── enhanceApp.js
│  │   │   └── index.js
│  │   └── Document folder type
│  │       ├── README.md
│  │       └── xyz.md
│  └── tsconfig.json
├──README.md
└──yarn.lock
```

## Writing new documentation :book:
- Create a folder inside src with the name of the document name
- Create a ```README.md``` file for default page content under the documentation
- Create multiple files as ```name.md``` to create more content on the sidebar of the page
- Update the ```config.js``` inside the ```.vuepress``` folder as shown in the below code blocks

## Add to Nav example
```
  {
    text: 'Developer Guide',
    link: '/developer-guide/'
  }
```

## Add to sidebar example
```
'/prismic/': [
  {
    title: 'Prismic',
    collapsable: false,
    children: [
      '',
      'features', // files inside the document folder
    ]
  }
],
```
