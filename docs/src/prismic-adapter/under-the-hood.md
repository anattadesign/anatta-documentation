# Under the hood

Prismic Adaptor is a API based system, working on the webhooks. Prismic Adapter runs crone jobs for syncing the data on the Shopify store.

Publishing and Un-publishing the Prismic pages triggers webhooks and Prismic Adapter runs the crone jobs every minute the sync the data.

## How sync works

Prismic Adapter user a server with a sql database. Every page request is saved in the database and later a crone job updates the content on the Shopify store.
