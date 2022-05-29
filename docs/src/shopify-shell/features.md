# Supported Feature

**Module Bundling:** 
We are using Webpack 5 to bundle and optimize all your Javascript and SCSS modules.

**Code Splitting:** 
Webpack creates pages and templates based on bundles rather than huge global bundles.

**Asset Optimization:**
Webpack will go through each and every asset and optimize them while building for production.

**Sourcemaps:** 
Provides support for JS and Sass sourcemaps when you are in development mode.

**JS Code Linting:**
ESlint is part of the build process. Predefined rules for .eslintrc in the project. 

**SCSS Code Linting:**
Stylelint is part of the build process. Predefined rules for .stylelintrc in the project. 

**Safe Watch and Deploy:**
Multiple checks to prevent to push in live theme. This minimizes the risks of deploying changes to the live site while in local development.

**Design Token System:**
Integrated SCSS advance and optimized token system to standardize styling rules (Breakpoints, Grid, Typography, etc) of Anatta 

**Modular Theme:** 
Shopify theme is constructed in the way to add or remove any component without breaking anything.  

**Modular CSS and JS:**
CSS and JS is written in the way to reuse components in other projects.

**Speed Optimization**
Modern speed optimization techniques applied. 

**Lazyload Components:**
 Each component either its plain js or vue , can be lazyloaded or import in demand.
 Check more in here: https://github.com/anattadesign/Shopify-Shell/issues/19

**Common chunks:**
Components are reused or reference is provided if same component is being used in multiple places. 
It is accomplished by creating a common chunk of the reused components.
It doesn't allow code repetation, which means optimised production build.
Check more in here: https://github.com/anattadesign/Shopify-Shell/issues/18

**Tree shaking:**
We might have imported modules, either 3rd party or custom components that are imported but not being used. 
Tree shaking refers to discard those import or any defined code that are not used(dead code). 
This feature eliminate these dead codes.
Check more in here: https://github.com/anattadesign/Shopify-Shell/issues/17

**Venodr chunks:**
All the 3rd party modules, that are being used in codebase is seperated out to vendor chunks. 
There is a rare chance for these modules to be updated, which in turns provides cacheing , so that these
large files(3rd party modules) are not loaded every time, which means performance boost.

**HMR:**
Once files are uploaded to shopify using themekit, browser will autoreload the webpage.
Check more in here: https://github.com/anattadesign/Shopify-Shell/issues/20
