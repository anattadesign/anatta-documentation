#!/usr/bin/env sh
open https://anattadesign.github.io/prismic-adaptor-integration/
# abort on errors
set -e

# build
yarn build

# navigate into the build output directory
cd src/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f https://github.com/anattadesign/prismic-adaptor-integration.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/anattadesign/prismic-adaptor-integration.git master:gh-pages
# git push -f git@github.com:anattadesign/anatta-docs.git master:gh-pages
cd -
