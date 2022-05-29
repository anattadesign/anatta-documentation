# Commands
`npm start` or `yarn start`
- Completes a Webpack build in **development** mode
- deloy the initial build to the shopify
- Webpack begins watching for file changes
- Theme Kit begins watching for file changes in `dist/`
- Theme Kit opens your development theme in your default browser

`npm run build` or `yarn build`
- Completes a Webpack build in **production** mode

`npm run deploy` or `yarn deploy`
- Completes a Webpack build in **production** mode
- Deploys and overwrites all theme files via Theme Kit

`npm run eslint` or `yarn eslint`
- Lint all JavaScript files in `src/js